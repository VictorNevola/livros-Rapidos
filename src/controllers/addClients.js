const { ClientModel } = require('../models/clients');

const addClients = (request, response) => {
  let id = request.session.currentUser._id;
  console.log(id);
  if (!id) {
    response.render('login', {
      errorMessage: `Você não esta logado, verificar!`
    });
  }
  else {
    ClientModel.find({ 'id_User': id })
      .then((resp) => {
        response.render('addClients', { resp })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

module.exports = addClients;

// if (!request.session.currentUser) {
//   response.render('login', {
//     errorMessage: `Você não esta logado, verificar!`
//   });
// } else {
//   getList(IncomeModel, request.session.currentUser._id)
//     .then((result) => {
//       response.render('insertIncome', { result });
//     })
// }