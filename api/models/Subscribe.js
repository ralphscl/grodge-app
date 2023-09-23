const mongoose = require('mongoose');

const { Schema } = mongoose;

const SubscribeSchema = new Schema({
    email: {type: String, unique: true}
});

const SubscribeModel = mongoose.model('Subscriber', SubscribeSchema);

module.exports = SubscribeModel;