const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    userDetails: {
        name: {
            first: String,
            middle: String,
            last: String,
        },
        gender: String,
        birthdate: String,
        contact: {type: String, unique: true},
        dateCreated: String,
        agreement: {type: mongoose.Schema.Types.Mixed, default: {}}
    },
    userAccount: {
        email: {type: String, unique: true},
        password: String,
    }
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;