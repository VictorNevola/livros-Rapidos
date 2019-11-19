const express = require('express');
const router = express.Router();

const {home, register, createUser, confirmUser, login, 
    authentication, sendEmail, confirmEmail, changePassword} = require('../controllers/index');

router.get('/', home);
router.get('/register', register);
router.post('/', createUser);
router.get('/register/:id', confirmUser);
router.get('/login', login)
router.post('/login', authentication)
router.get('/confirmemail', confirmEmail);
router.post('/sendemail', sendEmail);
router.get('/changePassword', changePassword);


module.exports = {
    router,
};