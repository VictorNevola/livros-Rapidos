const {UserChangeModel} = require("../models/userChange");

const changePasswordLink = (request, response) => {
    const auth = request.query.token;
    UserChangeModel.findOne({'auth': auth})
    .then((user)=>{
        if(user){
            response.render('password',{
                auth: auth,
            });
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