const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema({
    idUser: String,
    idProvider: String,
    nameProvider: String,
    amount: Number,
    valueUnit: Number,
    valueTotal: String,
    formPGTO: String,
    maturity: String,
    maturityFormat: String,
    description: String,
    category: String,
    proofOfPayment: String,
});

const ExpensesModel = mongoose.model('Financial-Expense', ExpensesSchema);

module.exports = {
    ExpensesModel,
};