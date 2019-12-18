const { ClientModel } = require('../models/clients');
const { IncomeModel } = require('../models/financialIncome');

const findChart = (request, response) => {
  IncomeModel.aggregate([{ $match: { 'idUser': request.session.currentUser._id } },
    { $group: { _id: "$maturity", "count": { "$sum": 1 } } }])
    .then(resp => {
      response.status(200).json(resp);
    })
    .catch(err => {
      console.log(err);
    })
}

const clientChart = (request, responses) => {
  ClientModel.aggregate([{ $match: { 'idUser': request.session.currentUser._id } },
  { $project : {dates: {"$dateToString": { format: "%Y-%m-%d", date: "$date" } } }},
  { $group: { _id: "$dates", "count": { "$sum": 1 } } }])
    .then(resposta => {
      responses.status(200).json(resposta);
    })
    .catch(erro => {
      console.log(erro);
    })
}

const incomeChart = (request, responses) => {
  IncomeModel.aggregate([{ $match: { 'idUser': request.session.currentUser._id } },
    { $project: { number: "$maturity", "total": { "$multiply": ["$amount", "$valueUnit"] } } },
    { $group: { _id: "$number", "soma": { "$sum": "$total" } } }])
    .then(respost => {
      responses.status(200).json(respost);
    })
    .catch(err => {
      console.log(erro);
    })

}

const incomeClient = (request, response) => {
  IncomeModel.aggregate([{ $match: { 'idUser': request.session.currentUser._id } },
    { $project: { number: "$nameClient", "total": { "$multiply": ["$amount", "$valueUnit"] } } },
    { $group: { _id: "$number", "soma": { "$sum": "$total" } } }])
    .then(respost => {
      response.status(200).json(respost);
    })
    .catch(err => {
      console.log(err);
    })
}

// Pegar total de clientes
// ([{ $group: { _id: "$idUser", "count": { "$sum": 1 } } }])

// Pegar total de receita 
// ([   {$project: { number: "$maturity", "total": {"$multiply": ["$amount", "$valueUnit"]}}},   {$group:   {_id:"total", "soma": {"$sum": "$total"} }}])

module.exports = { findChart, clientChart, incomeChart, incomeClient };

// { $match: { 'idUser': request.session.currentUser._id } },
//   { $group: { _id: "$date", "count": { "$sum": 1 } } }])

// db.financialincomes.aggregate([  
//   {$project: { number: "$maturity", "total": {"$multiply": ["$amount", "$valueUnit"]}}},
//   {$group:   {_id:"$number", "soma": {"$sum": "$total"} }}])


// db.clients.aggregate([
//   ... {{
//   ...   _id: "5de83dfb966c6760445aae23",
//   ...   field1: {
//   ...     accumulator1: { $count: "$_id"}
//   ...   }
//   ... 
//   ... ^C


// db.clients.aggregate([{$group: { _id: null, "count": {"$sum":1}}}])


// maturity: { $dateToString: {
//   format: "%Y-%m-%d",
//   date: "$maturity"
// }

// db.financialincomes.aggregate([{$group: { _id: "$maturity", "count": {"$sum":1}}}])
// ggregate([{$group: { _id: "$maturity", "count": {"$sum":1}}}])

// db.getCollection('collectionName').aggregate({$group:{_id: "$lastModified", count:{$sum:1}}})



// ([{$group: { _id: "$nameClient", "sum": {"$sum":{"$multiply": ["$amount", "$valueUnit"] } }}}])
// ([{$group: { _id: "$maturity", "sum": {"$multiply": ["$amount", "$valueUnit"]  }}}])


// { $project: { date: 1, item: 1, total: { $multiply: [ "$price", "$quantity" ] } } }
// ([{$project: { _id: "$nameClient", "total": {"$multiply": ["$amount", "$valueUnit"] } }}])
// ([{$project: { _id: "$nameClient", "total": {"$multiply": ["$amount", "$valueUnit"] } }},
//   {$group:   {"result": {"$sum": "$total"}}}])


// ([
//   { "$match" : { "cname" : "lung and bronchus" } },
//   { "$group" : { "_id" : "year", "t_count" : { "$sum" : "$count" }, "t_population" : { "$sum" : "$population" } } },
//   { "$project" : { "result" : { "$multiply" : [100000, { "$divide" : ["$t_count", "$t_population"] } ] } } }
// ])



// ([{$group:{ "_id":"$nameClient", "result": {"$sum": "$total"}}}])


// ([{$project: { "number": "$nameClient", "total": {"$multiply": ["$amount", "$valueUnit"] } }},
//   {$group:   {"_id": "$number", "result": {"$sum": "$total"}}}])



