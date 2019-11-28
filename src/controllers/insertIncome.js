const getList = require('../resources/getListAll');
const {IncomeModel} = require('../models/financialIncome');


const addIncome = (request, response) => {
    getList(IncomeModel, 0)
    .then((result) => {
        response.render('insertIncome',{result});
    })
}

module.exports = addIncome;