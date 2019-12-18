const { ClientModel } = require('../models/clients');

const deleteClients = (request, response) => {
  let email = request.body.email;
  ClientModel.deleteOne({email: email})
  .then(resp => {
    console.log(resp);
  })
  .catch(error => {
    console.log(error);
  })
}

module.exports = deleteClients;