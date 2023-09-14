// Packages
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Models
const User = require('../models/User.js');

const router = express.Router();
const bcryptjsSalt = bcryptjs.genSaltSync(10);
const jwtSecret = '87784y3ueri3j2ou83hbegqwy78ud';

router.post('/register', async (req, res) => {
  const { name, gender, birthdate, contact, agreements, dateCreated, email, password } = req.body;
  
  try {
    const userDoc = await User.create({
      userDetails: {
        name,
        gender,
        birthdate,
        contact,
        agreements,
        dateCreated,
      },
      userAccount: {
        email,
        password: bcryptjs.hashSync(password, bcryptjsSalt),
      }
    });

    res.json(userDoc);
  } catch (error) {
    // Handle the error and send an error response
    res.status(422).json({ error: error.message });
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const userDoc = await User.findOne({ 'userAccount.email': email  });

  if(userDoc) {
    const passwordAuth = bcryptjs.compareSync(password, userDoc.userAccount.password);
    if(passwordAuth){
      jwt.sign({ id: userDoc._id }, jwtSecret, {}, (err, token) => {
        if(err) throw err;

        res.cookie('token', token).json(userDoc);
      });
    } else {
      res.status(401).json('Wrong Password')
    }
  } else {
    res.status(404).json('Email Not Found')
  }
})

router.get('/profile', async (req, res) => {
  const { token } = req.cookies;
  
  if(token) {
    jwt.verify(token, jwtSecret, {}, async (err, payload) => {
      if(err) throw err;
      
      const {userDetails, userAccount, _id} = await User.findById(payload.id);
      res.json({
        _id, 
        email: userAccount.email,
        ...userDetails,
      });
    })
  } else {
    res.json(null);
  }
})

module.exports = router;