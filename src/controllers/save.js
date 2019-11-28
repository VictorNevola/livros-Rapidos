const {ClientModel} = require('../models/clients');

const save = (request , response) => {
  response.send(request.body)
}

module.exports = save;