const {ClientModel} = require('../models/clients');

function getList(model,userId) {
  return model.find({'id_User' : userId})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error)
  })

}

module.exports = getList;