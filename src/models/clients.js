const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema ({
  idUser: String,
  name: String,
  email: String,
  tellphone: String
});

const ClientModel = mongoose.model('clients', ClientSchema);

module.exports = {
  ClientModel,
};

