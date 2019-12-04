const {IncomeModel} = require('../models/financialIncome.js');

const deletIncomeBD = (request, response) => {
    IncomeModel.findByIdAndDelete({_id:request.params.id})
    .then((data)=>{
        response.status(200).json(data);
    })
    .catch((err)=>{
        response.status(400).json(err);
    })
}

module.exports = deletIncomeBD;