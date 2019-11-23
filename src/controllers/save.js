const {ClientModel} = require('../models/clients');

const save = (request , response) => {
  console.log(request.body);
}

module.exports = save;