const mongoose = require('mongoose');

const mongoConnect = () => {
    mongoose
        .connect('mongodb://localhost/projeto2', {useNewUrlParser: true})
        .then((success) => {
            console.log(`Conectado`);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
};

module.exports = {
    mongoConnect,
}