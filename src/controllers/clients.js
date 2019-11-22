const {UserClients} = require('../models/clients');

const clients = (request, response) => {
  response.render('clients');
}

module.exports = clients;
