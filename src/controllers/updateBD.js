const {IncomeModel} = require('../models/financialIncome');

const updateBD = (request, response) => {
    const incomeId = request.body.incomeId;
    const nameClient = request.body.nameClient;
    const amount = request.body.amount;
    const valueUnit = request.body.valueUnit;
    const valueTotal = request.body.valueTotal;
    const formPGTO = request.body.formPGTO;
    const maturity = request.body.maturity;
    const maturityFormat = request.body.maturityFormat;
    const description = request.body.description;
    const category = request.body.category;
    const invoice = request.body.invoice;

    IncomeModel.findByIdAndUpdate(incomeId,{
        nameClient: nameClient,
        amount: amount,
        valueUnit: valueUnit,
        valueTotal: valueTotal,
        formPGTO: formPGTO,
        maturity: maturity,
        maturityFormat: maturityFormat,
        description: description,
        category: category,
        invoice: invoice,
    },{'new': true})
    .then((succes)=>{
        response.status(200).json(succes);
    })
    .catch((err)=>{
        response.status(400).json(err);
    });
}

module.exports = updateBD;