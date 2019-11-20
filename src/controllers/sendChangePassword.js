const {UserModel} = require('../models/users');
const sendEmail = require('../resources/email');

const sendChangePassword = (request, response) =>{
    const userEmail = request.body.email;
    const subject = `Alteração de senha Livros Rapidos`;

    UserModel.findOne({'email': userEmail})
    .then((user)=>{
        const html = `http://localhost:3000/changepass/${user.id}` 
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