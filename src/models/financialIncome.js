const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    idUser: String,
    idCliente: String,
    nameClient: String,
    amount: Number,
    valueUnit: Number,
    valueTotal: String,
    formPGTO: String,
    maturity: String,
    maturityFormat: String,
    description: String,
    category: String,
    invoice: String,
});

const IncomeModel = mongoose.model('Financial-Income', IncomeSchema);

module.exports = {
    IncomeModel,
};