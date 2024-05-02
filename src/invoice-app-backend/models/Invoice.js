// models/Invoice.js
const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  produkt: String,
  antal: Number,
  price: Number,
  fee: Number,
});

module.exports = mongoose.model('Invoice', invoiceSchema);
