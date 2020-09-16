const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personaSchema = new Schema({
  names: { type: String, required: true },
  lastnames: { type: String, required: true },
  document: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  typedocument : { type: String, required: true },
  residence : { type: String, required: true },
  img : { type: String, required: true },
  
}, {
  timestamps: true,
});

const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;