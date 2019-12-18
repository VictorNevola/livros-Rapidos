const {ExpensesModel} = require('../models/financialExpenses');

const updateExpenseBD = (request, response) => {
    const idExpense = request.body.idExpense;
    const idProvider = request.body.idProvider;
    const nameProvider = request.body.nameProvider;
    const amount = request.body.amount;
    const valueUnit = request.body.valueUnit;
    const valueTotal = request.body.valueTotal;
    const formPGTO = request.body.formPGTO;
    const maturity = request.body.maturity;
    const maturityFormat = request.body.maturityFormat;
    const description = request.body.description;
    const category = request.body.category;

    ExpensesModel.findByIdAndUpdate(idExpense,{
        nameProvider: nameProvider,
        idProvider: idProvider,
        amount: amount,
        valueUnit: valueUnit,
        valueTotal: valueTotal,
        formPGTO: formPGTO,
        maturity: maturity,
        maturityFormat: maturityFormat,
        description: description,
        category: category,
    }, {'new': true})
    .then((succes)=>{
        response.status(200).json(succes);
    })
    .catch((err)=>{
        response.status(400).json(err);
    });
};

module.exports = updateExpenseBD;