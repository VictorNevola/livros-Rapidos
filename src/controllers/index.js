const home = require('./home');
const register = require('./register');
const createUser = require('./createUser');
const confirmUser = require('./confirmUser');
const login = require('./login');
const authentication = require('./authentication');
const sendEmail = require('./sendEmail');
const confirmEmail = require('./confirmEmail');
const changePassword = require('./changePassword');

module.exports = {
    home,
    register,
    createUser,
    confirmUser,
    login,
    authentication,
    sendEmail,
    confirmEmail,
    changePassword
}