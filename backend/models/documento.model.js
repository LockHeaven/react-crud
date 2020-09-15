const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const documentoSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Documento = mongoose.model('Documento', documentoSchema);

module.exports = Documento;