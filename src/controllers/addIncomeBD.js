const {IncomeModel} = require('../models/financialIncome.js');
// const PDFDocument = require('pdfkit');
// const fs = require('fs');

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

   // const doc = new PDFDocument();

   // doc.pipe(fs.createWriteStream('income.pdf'));

   // // doc.font(font)
   // // .fontSize(25)
   // // .text(description, 100, 100);

   // doc.text('8=========D');

   // doc.end();


   IncomeModel.create({
    idUser: idUser,
    idCliente: idCliente,
    nameClient: nameClient,
    amount: amount,
    valueUnit: valueUnit,
    valueTotal: valueTotal,
    formPGTO: formPGTO,
    maturity: maturity,
    maturityFormat: maturityFormat,
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