const {gmailLogin} = process.env;
const {gmailPassword} = process.env;
const nodemailer = require('nodemailer');

const sendEmail = (subject, html, userEmail)=>{
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
            console.log(`Não foi possivel enviar o email, error: ${err}`);
        }else {
            console.log(`Email enviado com sucesso, verificar caixa de entrada!`);
        }
    });
}

module.exports = sendEmail;