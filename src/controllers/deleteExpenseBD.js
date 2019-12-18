const {ExpensesModel} = require('../models/financialExpenses.js')

const deletExpenseBD = (request, response) => {
    ExpensesModel.findByIdAndDelete({_id:request.params.id})
    .then((data)=>{
        response.status(200).json(data);
    })
    .catch((err)=>{
        response.status(400).json(err);
    })
}

module.exports = deletExpenseBD;