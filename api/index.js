const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],

}));

mongoose.connect(process.env.MONGODB_URL);

const userController = require('./controllers/UserController');
const SubscribeController = require('./controllers/SubscribeController');

app.use('/', userController);
app.use('/newsletter', SubscribeController);

app.get('/test', (req, res) => {
  res.json('Connected!');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
