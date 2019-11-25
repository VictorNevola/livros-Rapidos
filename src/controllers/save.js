const {ClientModel} = require('../models/clients');

const save = (request , response) => {
  let name = request.body.name;
  let email = request.body.email;
  let tellphone = request.body.tellphone;
  let userID = "1";

  ClientModel.create({
    id_User: userID,
    name: name,
    email: email,
    tellphone: tellphone
  })
  .then(client => {
    console.log(client) ;
    response.status(200).json(client)
  })
  .catch(error => {
    console.log(error);
  })
}

module.exports = save;