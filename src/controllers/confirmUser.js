const {UserModel} = require('../models/users');

const confirmUser = (request, response) =>{
    const userId = request.params.id;

    UserModel.findByIdAndUpdate(userId, {confirmed: true}, {'new': true})
    .then((succes)=>{
        response.redirect('/');
    })
    .catch((err)=>{
        response.send('ERROR')
    })
}

module.exports = confirmUser;