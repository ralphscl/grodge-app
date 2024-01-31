const mongoose = require('mongoose');

const { Schema } = mongoose;

const subscribeSchema = new Schema({
    email: { type: String, unique: true }
});

const SubscribeModel = mongoose.model('Subscriber', subscribeSchema);

module.exports = SubscribeModel;