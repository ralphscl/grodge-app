const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],

}));

mongoose.connect(process.env.MONGODB_URL);

const userController = require('./controllers/UserController');
app.use('/', userController);

app.get('/test', (req, res) => {
  res.json('Connected!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
