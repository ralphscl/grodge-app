const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const brcyptjs = require('bcryptjs');

// models
const User = require('./models/User.js');

require('dotenv').config();

const app = express();
const bcryptjsSalt = brcyptjs.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',

}));

mongoose.connect(process.env.MONGODB_URL);

app.post('/register', async (req, res) => {
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
                password: brcyptjs.hashSync(password, bcryptjsSalt),
            }
        });

        res.json(userDoc);
    } catch (error) {
        // Handle the error and send an error response
        res.status(422).json({ error: error.message });
      }
})

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.listen(4000);
