// models/medicine.js
const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
