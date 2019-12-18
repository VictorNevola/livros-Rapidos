const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeSchema = new Schema({
    idUser: String,
    idCliente: String,
    nameClient: String,
    amount: Number,
    valueUnit: Number,
    valueTotal: String,
    valueTotalInt: Number,
    formPGTO: String,
    maturity: String,
    maturityFormat: String,
    description: String,
    category: String,
    invoice: String,
    date: Date
});

const IncomeModel = mongoose.model('financialincome', IncomeSchema);

module.exports = {
    IncomeModel,
};