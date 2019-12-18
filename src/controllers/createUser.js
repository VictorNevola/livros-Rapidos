const { UserModel } = require("../models/users");
const bcrypt = require(`bcrypt`);
const bcryptSalt = 10;
const sendEmail = require("../resources/email");

const createUser = (request, response) => {
  const userName = request.body.name;
  const password = request.body.password;
  const userEmail = request.body.email;
  const subject = `Confirmação de cadastro Livros Rapidos`;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (userName === `` || password === `` || userEmail === ``) {
    response.render("register", {
      errorMessage: `Inserir um nome, senha e email para se cadastrar`
    });
    return;
  }

  UserModel.findOne({ email: userEmail }).then(user => {
    if (user) {
      response.render("register", {
        errorMessage: `Email ja cadastrado!`
      });
    } else {
      UserModel.create({
        name: userName,
        password: hashPass,
        email: userEmail,
      })
        .then(user => {
          const html = `https://livros-rapidos.herokuapp.com/register/${user.id}`;
          sendEmail(subject, html, userEmail);
          response.render("confirmEmail");
        })
        .catch(err => {
          console.log(err);
          response.render("register", {
            errorMessage: `Não possivel enviar o email, ${err}`
          });
        });
    }
  });
};

module.exports = createUser;
