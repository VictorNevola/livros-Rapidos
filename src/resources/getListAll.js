const {ClientModel} = require('../models/clients');
const {IncomeModel} = require('../models/financialIncome');
const {ExpensesModel} = require('../models/financialExpenses');

const getList = (model,userId) => {
  return model.find({'idUser' : userId})
};

module.exports = getList;