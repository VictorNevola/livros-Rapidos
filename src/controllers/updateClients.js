const { ClientModel } = require('../models/clients');

const updateClients = (request, response) => {
  let name = request.body.name;
  let email = request.body.email;
  let tellphone = request.body.tellphone;
  
//   Cat.findOneAndUpdate({age: 17}, {$set:{name:"Naomi"}}, {new: true}, (err, doc) => {
//     if (err) {
//         console.log("Something wrong when updating data!");
//     }

//     console.log(doc);
// });

  ClientModel.findOneAndUpdate({email:email}, {$set:{
    name: name,
    email: email,
    tellphone: tellphone
  }}, {'new': true})
  .then(resp => {
    console.log(resp);
  })
  .catch(error => {
    console.log(error);
  })
}

module.exports = updateClients;