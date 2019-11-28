const {IncomeModel} = require('../models/financialIncome.js');

const addIncomeBD = (request, response) => {
   let idUser = request.body.idUser;
   let idCliente = request.body.idCliente;
   let nameClient = request.body.nameClient;
   let amount = request.body.amount;
   let valueUnit = request.body.valueUnit;
   let valueTotal = request.body.valueTotal;
   let formPGTO = request.body.formPGTO;
   let maturity = request.body.maturity;
   let description = request.body.description;
   let category = request.body.category;
   let invoice = request.body.invoice;

   IncomeModel.create({
    idUser: idUser,
    idCliente: idCliente,
    nameClient: nameClient,
    amount: amount,
    valueUnit: valueUnit,
    valueTotal: valueTotal,
    formPGTO: formPGTO,
    maturity: maturity,
    description: description,
    category: category,
    invoice: invoice
   })
   .then((income)=>{
    response.status(200).json(income);
   })
   .catch((err)=>{
    console.log(err);
    response.status(400).json(err);
   })
}

module.exports = addIncomeBD;