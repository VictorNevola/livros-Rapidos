const {IncomeModel} = require('../models/financialIncome.js');


function sumValues(values) {
  let newValues = values.map((total) => {
    return total.amount * total.valueUnit;
  })
  let sumed = newValues.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  })
  return sumed;
}


module.exports = sumValues;

// db.financialincomes.aggregate([{$project: { _id: "$maturity", "total": {"$multiply": ["$amount", "$valueUnit"] } }}])


// let values = [
//   {
//     _id: "5de99c0726be7e08b010ec37",
//     idUser: '5de83dfb966c6760445aae23',
//     idCliente: '5de996f06d6075023d2b90d1',
//     nameClient: 'Matheus',
//     amount: 10,
//     valueUnit: 12,
//     valueTotal: '120,00',
//     formPGTO: 'boleto',
//     maturity: '2020-03-11',
//     maturityFormat: '11/03/2020',
//     description: 'Teste1',
//     category: 'teste2',
//     invoice: 'C:\\fakepath\\grenadeExplosion.png',
//     __v: 0
//   },
//   {
//     _id: "5de9ac8b3fd61c1550ba2b8b",
//     idUser: '5de83dfb966c6760445aae23',
//     idCliente: '5de996f06d6075023d2b90d1',
//     nameClient: 'Matheus',
//     amount: 4,
//     valueUnit: 10,
//     valueTotal: '40,00',
//     formPGTO: 'boleto',
//     maturity: '2020-11-10',
//     maturityFormat: '10/11/2020',
//     description: 'teste',
//     category: 'pago',
//     invoice: 'C:\\fakepath\\grenadeFlash.png',
//     __v: 0
//   },
//   {
//     _id: "5debb4e2fd212f38784bb519",
//     idUser: '5de83dfb966c6760445aae23',
//     idCliente: '5de996f06d6075023d2b90d1',
//     nameClient: 'Matheus',
//     amount: 5,
//     valueUnit: 500,
//     valueTotal: '2.500,00',
//     formPGTO: 'debito',
//     maturity: '2021-11-04',
//     maturityFormat: '04/11/2021',
//     description: 'teste',
//     category: 'teste',
//     invoice: 'C:\\fakepath\\flash.jpeg',
//     __v: 0
//   }
// ];

// sumValues(values);
