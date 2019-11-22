const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ms = require('ms');

const userChange = new Schema ({
    idUser: String,
    auth: String,
    createAt: {
        type: Date,
        default: Date.now,
        expireAfterSeconds: 1800
    }
});

const UserChangeModel = mongoose.model('userChange', userChange);

module.exports = {UserChangeModel};