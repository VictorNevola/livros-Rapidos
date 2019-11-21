const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userChange = new Schema ({
    idUser: String,
    auth: String,
    createAt: {
        type: Date,
        default: Date.now,
        expires: 120
    }
});

const UserChangeModel = mongoose.model('userChange', userChange);

module.exports = {UserChangeModel};