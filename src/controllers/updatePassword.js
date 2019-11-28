const {UserModel} = require('../models/users');
const {UserChangeModel} = require("../models/userChange");
const bcrypt = require(`bcrypt`);
const bcryptSalt = 10;

const updatePassword = (request, response) => {
    const newPassword = request.body.password;
    const confirmNewPassword = request.body.confirmPassword;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(confirmNewPassword, salt);
    const auth = request.query.token;
    let userId = ``;

    if(newPassword === `` || confirmNewPassword === ``){
        response.render('password', {
            Message: 'Campos não podem está em branco, verificar!',
            auth: auth
        });
        return;
    }else if(newPassword !== confirmNewPassword){
        response.render('password', {
            Message: 'Nova senha não é igual a senha confirmada, verificar!',
            auth: auth
        });
        return;
    };

    UserChangeModel.findOne({'auth': auth})
    .then((user)=>{
        if(user){
            UserModel.findByIdAndUpdate(user.idUser, {password: hashPass}, {'new': true})
            .then((user)=>{
                response.redirect('/login');
            })
            .catch((err)=>{
                response.send(err);
            })
        }else{
            response.render('changePassword', {
                Message: `Token expirado, enviar confirmação por email novamente`
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    });
}

module.exports = updatePassword;