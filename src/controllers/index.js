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
const addClients = require('./addClients');
const save = require('./save');
const updatePassword = require('./updatePassword');
const addIncome = require('./insertIncome');
const addIncomeBD = require('./addIncomeBD');
const secret = require('./secret');

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
    changePasswordLink,
    addClients,
    save,
    updatePassword,
    addIncome,
    addIncomeBD,
    secret
}