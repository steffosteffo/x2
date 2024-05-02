// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  hemligt: String,
});

module.exports = mongoose.model('Customer', customerSchema);
