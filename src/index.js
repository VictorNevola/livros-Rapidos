require('dotenv').config();
const {app} = require('./appConfig');
const {PORT} = process.env;

app.listen(PORT, (error)=>{
    if(error){
        console.log(error);
    }
    console.log(`Rodando na porta ${PORT}`);
});