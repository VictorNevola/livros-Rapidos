const {UserModel} = require('../models/users');
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

        if(user.auth === null){
            UserModel.findByIdAndUpdate(userId, {auth: hashPass}, {'new': true})
            .then((sucesso)=>{
            })
            .catch((err)=>{
            });    
        }
        
        const html = `http://localhost:3000/changepass/?token=${user.auth}` 
            sendEmail(subject, html, userEmail);
            response.render('changePassword', {
                Message: `Email enviado com Sucesso!`
            });
    })
    .catch((err)=>{
        response.render('changePassword', {
            Message: `Email não cadastrado!`
        });
    });
}

module.exports = sendChangePassword;