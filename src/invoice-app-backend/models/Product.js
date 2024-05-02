// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productname: String,
  antal: Number,
  pris: Number,
  summa: Number,
  moms: Number,
  tot: Number,
});

module.exports = mongoose.model('Product', productSchema);
