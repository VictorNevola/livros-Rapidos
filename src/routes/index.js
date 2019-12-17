const express = require('express');
const router = express.Router();

const {home, register, createUser, confirmUser, login, 
    authentication, sendConfirmEmail, confirmEmail, changePassword,
    deleteClients,updateClients,
    sendChangePassword, changePasswordLink, updatePassword, addIncome,
    addClients, save, addIncomeBD, secret, deletIncomeBD,
    findOneById, updateBD, landingPage, clientDetail, findChart, clientChart, incomeChart, incomeClient, addExpenses,
    addExpensesBD, deletExpenseBD, findExpenseBD, updateExpenseBD} = require('../controllers/index');

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
router.post('/deleteClients', deleteClients);
router.post('/updateClients', updateClients);
router.post('/changepass/', updatePassword);
router.get('/addIncome',addIncome);
router.post('/addIncomeBD', addIncomeBD);
router.delete('/deletIncomeBD/:id', deletIncomeBD);
router.get('/findIncome/:id', findOneById);
router.get('/secret', secret);
router.patch('/updateIncome', updateIncomeBD);
router.get('/landingPage', landingPage);
router.get('/detail/:id', clientDetail);
router.get('/chart', findChart);
router.get('/chart2', clientChart);
router.get('/chart3', incomeChart);
router.get('/chart4', incomeClient);
router.get('/addExpenses', addExpenses);
router.post('/addExpenseBD', addExpensesBD);
router.delete('/deletexpenseBD/:id', deletExpenseBD);
router.get('/findexpense/:id', findExpenseBD);
router.patch('/updateExpense',updateExpenseBD);

module.exports = {
    router,
};