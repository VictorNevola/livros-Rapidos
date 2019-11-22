const {UserModel} = require('../models/users');
const {UserChangeModel} = require("../models/userChange");
const sendEmail = require('../resources/email');
const bcrypt = require(`bcrypt`);
const bcryptSalt = 10;

const sendChangePassword = (request, response) =>{
    const userEmail = request.body.email;
    const subject = `Alteração de senha Livros Rapidos`;

    UserModel.findOne({'email': userEmail})
    .then((user)=>{
        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(user.id, salt);
        const userId = user.id;
        
        UserChangeModel.findOne({'idUser': userId})
        .then((user)=>{
            if(!user){
                UserChangeModel.create({
                    idUser: userId,
                    auth: hashPass,
                })
                .then((user)=>{
                    console.log('Change Password criado');
                })
                .catch((err)=>{
                    console.log('Erro na inserção, VERIFICAR!!!!!!');
                })
                const html = `<a href='http://localhost:3000/changepass/?token=${hashPass}'>Trocar</a>` 
                sendEmail(subject, html, userEmail);
                response.render('changePassword', {
                    Message: `Para alterar a sua senha, por gentileza, acesse o link que enviamos para seu e-mail.`
                });
            }else {
                response.render('changePassword', {
                    Message: 'Email já enviado, verificar caixa de entrada!'
                });
            }
        })
        .catch((err)=>{
            console.log('Change Password ja criado',err);
        });
    })
    .catch((err)=>{
        response.render('changePassword', {
            Message: `Email não cadastrado!`
        });
    });
}

module.exports = sendChangePassword;