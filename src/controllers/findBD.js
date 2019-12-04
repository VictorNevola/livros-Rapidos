const {ClientModel} = require('../models/clients');
const {IncomeModel} = require('../models/financialIncome');

const findOneById = (request, response)=>{
    IncomeModel.findOne({_id: request.params.id})
    .then((succes)=>{
        response.status(200).json(succes);
    })
    .catch((err)=>{
        response.status(400).json(err);
    });
}

module.exports = findOneById;