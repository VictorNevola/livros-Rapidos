const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema ({
  name: String,
  email: String,
  cellphone: String
});

const ClientModel = mongoose.model('clients', ClientSchema);

module.exports = {
  ClientModel,
};

