const { ClientModel } = require('../models/clients');

const findClient = (request, response) =>{
    const email = request.body.email;

    ClientModel.find({ 'email':email })
    .then((succes)=>{
        console.log(succes);
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = findClient;