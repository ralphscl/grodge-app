const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    userDetails: {
        name: {
            first: String,
            middle: String,
            last: String,
        },
        gender: { type: String },
        birthdate: {type: Date },
        contact: { type: String, unique: true },
        dateCreated: { type: Date, default: Date() },
        agreement: { type: mongoose.Schema.Types.Mixed, default: {} }
    },
    userAccount: {
        lastLogin: { type: Date, default: null },
        status: { type: Boolean },
        role: { type: String },
        email: { type: String, unique: true },
        password: { type: String }
    }
});

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;