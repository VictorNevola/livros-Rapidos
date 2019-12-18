const { IncomeModel } = require('../models/financialIncome');
const { ExpensesModel } = require('../models/financialExpenses');
const sum = require('../resources/sumValues');

const clientDetails = (request, response) => {
  let clientId = request.params.id;
  IncomeModel.find({ 'idCliente': clientId })
    // ExpenseModel.find({ 'idProvider': clientId })
    .then((resp) => {
      const total = sum(resp);
      console.log(clientId);
      ExpensesModel.find({ 'idProvider': clientId })
        .then((resposta) => {
          console.log(resposta);
          const totalE = sum(resposta);
          // response.render('detailClients', { resposta , total});
          response.render('detailClients', { resp, total, resposta, totalE });
        })
        .catch((erro) => {
          console.log(erro);
        })
      // response.render('detailClients', { resp, total });
    })
    .catch((error) => {
      console.log(error);
    })
}

// const clientExpensive = (request, response) => {
//   let clientId = request.params.id;
//   ExpenseModel.find({'idProvider': clientId})
//   .then((resposta) => {
//     console.log(resposta);
//     const total = sum(resposta);
//     response.render('detailClients', { resposta , total});
//   })
//   .catch((erro) => {
//     console.log(erro);
//   })
// }

module.exports = clientDetails;