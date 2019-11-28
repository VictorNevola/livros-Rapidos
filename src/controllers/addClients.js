const {UserClients} = require('../models/clients');

const addClients = (request, response) => {
  response.render('addClients');
}

module.exports = addClients;
