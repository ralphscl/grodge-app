// Packages
const express = require('express');

// Models
const Subscribe = require('../models/Subscribe.js');

const router = express.Router();

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    await Subscribe.create({email});

    res.json('Subcribed successfully!')
  } catch (error) {
    // Handle the error and send an error response
    res.status(422).json({ error: error.message });
  }
})

router.get('/subscription', async (req, res) => {
  const { email } = req.query;

  if(email) {
    const subcription = await Subscribe.find({email: email});
    
    if(subcription.length !== 0) {
      res.json(true);
    } else {
      res.json(false);
    }
  }
});

module.exports = router;