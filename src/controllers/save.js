const {ClientModel} = require('../models/clients');

const save = (request , response) => {
  let name = request.body.name;
  let email = request.body.email;
  let tellphone = request.body.tellphone;
  let userID = request.session.currentUser._id;


  ClientModel.create({
    idUser: userID,
    name: name,
    email: email,
    tellphone: tellphone,
    date: new Date().toString()
  })
  .then(client => {
    response.status(200).json(client)
  })
  .catch(error => {
    console.log(error);
  })
}

module.exports = save;