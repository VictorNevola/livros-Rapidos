const {UserModel} = require('../models/users');
const sendEmail = require('../resources/email');

const sendConfirmEmail = (request, response) =>{
    const userEmail = request.body.email;
    const subject = `Confirmação de cadastro Livros Rapidos`;

    UserModel.findOne({'email': userEmail})
    .then((user)=>{
        const html = `http://localhost:3000/register/${user.id}` 
            sendEmail(subject, html, userEmail);
            response.render('confirmEmail');
    })
    .catch((err)=>{
        response.render('confirmEmail', {
            Message: `Email não cadastrado!`
        });
    });
}

module.exports = sendConfirmEmail;