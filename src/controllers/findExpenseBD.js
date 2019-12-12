const {ExpensesModel} = require('../models/financialExpenses.js');
const {ClientModel} = require('../models/clients');
const getList = require('../resources/getListAll');

const findExpenseBD = async (request, response)=>{
    const clients = await getList(ClientModel, request.session.currentUser._id);
    ExpensesModel.findOne({_id: request.params.id})
    .then((succes)=>{
        response.status(200).json({succes, clients});
    })
    .catch((err)=>{
        response.status(400).json(err);
    });
}

module.exports = findExpenseBD;