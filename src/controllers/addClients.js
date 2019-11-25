const { UserClients } = require('../models/clients');
const { ClientModel } = require('../models/clients');

const addClients = (request, response) => {
  let clientes = {};
  ClientModel.find({ 'id_User': 1 })
    .then((resp) => {
      // clientes = response;
      response.render('addClients', { resp })
    })
    .catch((error) => {
      console.log(error)
    }) 
    
  }

module.exports = addClients;
