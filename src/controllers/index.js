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
const list = require('./listAll');
const deleteClients = require('./deleteClients');
const updateClients = require('./updateClients');
const updatePassword = require('./updatePassword');
const addIncome = require('./insertIncome');
const addIncomeBD = require('./addIncomeBD');
const secret = require('./secret');
const deletIncomeBD = require('./deleteBD');
const findOneById = require('./findBD');
const updateBD = require('./updateBD');
const landingPage = require('./landingPage');

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
    list,
    deleteClients,
    updateClients,
    updatePassword,
    addIncome,
    addIncomeBD,
    secret,
    deletIncomeBD,
    findOneById,
    updateBD,
    landingPage,
}