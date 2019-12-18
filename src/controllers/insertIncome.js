const getList = require('../resources/getListAll');
const {IncomeModel} = require('../models/financialIncome');
const {ClientModel} = require('../models/clients');

const addIncome = async (request, response) => {
    if(!request.session.currentUser){
        response.render('login',{
            errorMessage: `Você não esta logado, verificar!`
        });
    }else {
        const financialIncomes = await getList(IncomeModel, request.session.currentUser._id);
        const clients = await getList(ClientModel, request.session.currentUser._id);
        response.render('insertIncome',{financialIncomes, clients});
    }
}

module.exports = addIncome;