const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    userDetails: {
        name: {
            first: String,
            last: String,
        },
        gender: String,
        birthdate: BigInt,
        contact: {type: String, unique: true},
    },
    userAccount: {
        email: {type: String, unique: true},
        password: String,
    }
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;