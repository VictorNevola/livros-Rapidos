const {UserChangeModel} = require("../models/userChange");

const changePasswordLink = (request, response) => {
    UserChangeModel.findOne({'auth': request.query.token})
    .then((user)=>{
        if(user){
            response.render('password');
        }else {
            response.render(`changePassword`, {
                Message: `Link Expirado, enviar novamente a solicitação!`,
            });
        }
    })
    .catch((err)=>{
        console.log(`Erro ChangePasswordLink`, err);
    })
}

module.exports = changePasswordLink;