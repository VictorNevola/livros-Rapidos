const {IncomeModel} = require('../models/financialIncome');
const sum = require('../resources/sumValues');

const clientDetails = (request, response) => {
  let clientId = request.params.id
  IncomeModel.find({'idCliente': clientId})
  .then((resp) =>{
    const total = sum(resp);
    response.render('detailClients', { resp , total});
  })
  .catch((error) => {
    console.log(error);
  })
}

module.exports = clientDetails;