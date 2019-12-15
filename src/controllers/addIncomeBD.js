const { IncomeModel } = require('../models/financialIncome.js');

const addIncomeBD = (request, response) => {
   let idUser = request.session.currentUser._id;
   let idCliente = request.body.idCliente;
   let nameClient = request.body.nameClient;
   let amount = request.body.amount;
   let valueUnit = request.body.valueUnit;
   let valueTotal = request.body.valueTotal;
   let formPGTO = request.body.formPGTO;
   let maturity = request.body.maturity;
   let maturityFormat = request.body.maturityFormat;
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
      valueTotalInt: parseFLoat(valueTotal),
      formPGTO: formPGTO,
      maturity: maturity,
      maturityFormat: maturityFormat,
      description: description,
      category: category,
      invoice: invoice,
      date: new Date().toString()
   })
      .then((income) => {
         response.status(200).json(income);
      })
      .catch((err) => {
         console.log(err);
         response.status(400).json(err);
      })
}

module.exports = addIncomeBD;