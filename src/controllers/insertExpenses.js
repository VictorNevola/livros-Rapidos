const getList = require('../resources/getListAll');
const {ExpensesModel} = require('../models/financialExpenses.js');
const {ClientModel} = require('../models/clients');

const addExpenses = async (request, response) => {
    if(!request.session.currentUser){
        response.render('login', {
            errorMessage: `Você não esta logado, verificar!`
        });
    }else {
        const financialExpenses = await getList(ExpensesModel, request.session.currentUser._id);
        const clients = await getList(ClientModel, request.session.currentUser._id);
        console.log(clients)
        response.render('insertExpenses', {financialExpenses, clients})
    }
}

module.exports = addExpenses;