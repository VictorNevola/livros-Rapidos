const {UserModel} = require('../models/users');

const confirmUser = (request, response) =>{
    const userId = request.params.id;

    UserModel.findByIdAndUpdate(userId, {confirmed: true}, {'new': true})
    .then((succes)=>{
        response.render('login', {
            errorMessage: `Email Confirmado, Acesse e tenha controle das finanças 🚀`
        });
    })
    .catch((err)=>{
        response.send('ERROR')
    })
}

module.exports = confirmUser;