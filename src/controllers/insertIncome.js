const getList = require('../resources/getListAll');
const {IncomeModel} = require('../models/financialIncome');


const addIncome = (request, response) => {
    if(!request.session.currentUser){
        response.render('login',{
            errorMessage: `Você não esta logado, verificar!`
        });
    }else {
        getList(IncomeModel, request.session.currentUser._id)
        .then((result) => {
            response.render('insertIncome',{result});
        })
    }
}

module.exports = addIncome;