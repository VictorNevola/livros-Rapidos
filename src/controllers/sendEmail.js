const {UserModel} = require('../models/users');
const nodemailer = require('nodemailer');
const {gmailLogin} = process.env;
const {gmailPassword} = process.env;
let subject = "" ;
let html = "";
let render = "";

const sendEmail = (request, response) =>{
    const userEmail = request.body.email;

    UserModel.findOne({'email': userEmail})
    .then((user)=>{
        if(request.route.path === '/sendemail'){
            subject = 'Confirmação de cadastrado';
            html = `http://localhost:3000/register/${user.id}`;
            render = 'confirmEmail';

        }else {
            subject = 'Atualizar Senha';
            html = `http://localhost:3000/changePassword/${user.id}`;
            render = 'changePassword'
        }
        if(!user){
            response.render(`${render}`, {
                Message: `Email não existe, verificar!`,
            });
            return;
        }else {
            const transport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: gmailLogin,
                    pass: gmailPassword
                }
            });
            const email = {
                from: gmailLogin,
                to: userEmail,
                subject: `${subject}`,
                html: `${html}`
            };
            transport.sendMail(email, (err)=>{
                if(err){
                    response.send(`Não foi possivel enviar o email, error: ${err}`);
                }else {
                    response.render(`${render}`,{
                        Message: `Email enviado com sucesso, verificar caixa de entrada!`
                    });
                }
            });
        }
    });
}

module.exports = sendEmail;