const {ExpensesModel} = require('../models/financialExpenses.js')

const addExpenseBD = (request, response) => {
    let idUser = request.session.currentUser._id;
    let idProvider = request.body.idProvider;
    let nameProvider = request.body.nameProvider;
    let amount = request.body.amount;
    let valueUnit = request.body.valueUnit;
    let valueTotal = request.body.valueTotal;
    let formPGTO = request.body.formPGTO;
    let maturity = request.body.maturity;
    let maturityFormat = request.body.maturityFormat;
    let description = request.body.description;
    let category = request.body.category;
    
    ExpensesModel.create({
        idUser: idUser,
        idProvider: idProvider,
        nameProvider: nameProvider,
        amount: amount,
        valueUnit: valueUnit,
        valueTotal: valueTotal,
        formPGTO: formPGTO,
        maturity: maturity,
        maturityFormat: maturityFormat,
        description: description,
        category: category,
    })
    .then((expense)=>{
        response.status(200).json(expense);
    })
    .catch((err)=>{
        response.status(400).json(err);
    });
}

module.exports = addExpenseBD;