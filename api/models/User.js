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
        birthdate: Date,
        contact: {type: String, unique: true},
        dateCreated: {type: Date, default: Date()},
        agreement: {type: mongoose.Schema.Types.Mixed, default: {}}
    },
    userAccount: {
        email: {type: String, unique: true},
        password: String,
        lastLogin: {type: Date, default: null}
    }
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;