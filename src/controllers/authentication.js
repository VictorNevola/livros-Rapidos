const {UserModel} = require('../models/users');
const bcrypt = require('bcrypt');

const authentication = (request, response) => {
    const userEmail = request.body.email;
    const password = request.body.password;

    if (userEmail === `` || password === ``){
        response.render('login', {
            errorMessage: `Inserir email e senha para acessar!`
        });
        return;
    }

    UserModel.findOne({'email': userEmail})
    .then((user)=>{
        if(!user){
            response.render('login', {
                errorMessage: `Email não cadastrado, verificar!`,
            });
            return;
        }
        if(!user.confirmed){
            response.render('login', {
                errorConfirmed: `Conta não verificada, deseja reenviar o email para confirmação ?`
            });
            return;
        }
        if (bcrypt.compareSync(password, user.password)){
            request.session.currentUser = user;
            response.render('ladingPage');
        }else {
            response.render('login', {
                errorMessage: `Senha incorreta!`,
            });
        }
    })
    .catch((err)=>{
        console.log(err);
    });
};

module.exports = authentication