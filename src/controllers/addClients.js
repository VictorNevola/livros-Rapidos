const { ClientModel } = require('../models/clients');

const addClients = (request, response) => {
  ClientModel.find({ 'id_User': 1 })
    .then((resp) => {
      response.render('addClients', { resp })
    })
    .catch((error) => {
      console.log(error)
    }) 
    
  }

module.exports = addClients;
