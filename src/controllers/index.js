const home = require('./home');
const register = require('./register');
const createUser = require('./createUser');
const confirmUser = require('./confirmUser');
const login = require('./login');
const authentication = require('./authentication');
const sendConfirmEmail = require('./sendConfirmEmail');
const confirmEmail = require('./confirmEmail');
const changePassword = require('./changePassword');
const sendChangePassword = require('./sendChangePassword');
const changePasswordLink = require('./changePasswordLink');

module.exports = {
    home,
    register,
    createUser,
    confirmUser,
    login,
    authentication,
    sendConfirmEmail,
    confirmEmail,
    changePassword,
    sendChangePassword,
    changePasswordLink
}