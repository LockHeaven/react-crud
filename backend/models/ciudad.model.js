const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ciudadSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Ciudad = mongoose.model('Ciudad', ciudadSchema);

module.exports = Ciudad;