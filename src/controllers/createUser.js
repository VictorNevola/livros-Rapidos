const {UserModel} = require('../models/users');
const bcrypt = require(`bcrypt`);
const bcryptSalt = 10;
const nodemailer = require('nodemailer');
const {gmailLogin} = process.env;
const {gmailPassword} = process.env;

const createUser = (request, response) => {
    const userName = request.body.name;
    const password = request.body.password;
    const userEmail = request.body.email;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    if(userName === `` || password === `` || userEmail === ``) {
        response.render('register', {
            errorMessage: `Inserir um nome, senha e email para se cadastrar`
        });
        return;
    };

    UserModel.findOne({'email': userEmail})
        .then((user)=>{
            if (user){
                response.render('register', {
                    errorMessage: `Email ja cadastrado!`
                });
            } else {
                UserModel.create({
                    name: userName,
                    password: hashPass,
                    email: userEmail,
                })
                .then(() => {   
                    UserModel.findOne({'email': userEmail})
                    .then((user) => {
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
                            subject: 'Confirmação de cadastrado',
                            html: `http://localhost:3000/register/${user.id}`
                        };
                    
                        transport.sendMail(email, (err) => {
                            if(err){
                                response.send(`Não foi possivel enviar o email, error: ${err}`);
                            }else {
                                response.render('confirmEmail');
                            }
                        });
                    })
                })
                .catch((err) => {
                    console.log(err);
                });   
            }
        })
};

module.exports = createUser;