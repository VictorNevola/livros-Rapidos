const express = require('express');
const router = express.Router();

const {home, register, createUser, confirmUser, login, 
    authentication, sendConfirmEmail, confirmEmail, changePassword,
    sendChangePassword, changePasswordLink, updatePassword, addIncome,
    addClients, save, addIncomeBD} = require('../controllers/index');

router.get('/', home);
router.get('/register', register);
router.post('/', createUser);
router.get('/register/:id', confirmUser);
router.get('/login', login)
router.post('/login', authentication)
router.get('/confirmemail', confirmEmail);
router.post('/sendConfirmEmail', sendConfirmEmail);
router.get('/changePassword', changePassword);
router.post('/sendChangePassword',sendChangePassword);
router.get('/changepass/', changePasswordLink);
router.get('/addClients', addClients);
router.post('/save' , save);
router.post('/changepass/', updatePassword);
router.get('/addIncome',addIncome);
router.post('/addIncomeBD', addIncomeBD)

module.exports = {
    router,
};