const express = require('express');
const router = express.Router();

const {home, register, createUser, confirmUser, login, 
    authentication, sendConfirmEmail, confirmEmail, changePassword,
    sendChangePassword} = require('../controllers/index');

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

module.exports = {
    router,
};