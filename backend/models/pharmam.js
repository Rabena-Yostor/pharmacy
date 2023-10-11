// models/medicine.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl:{
    type: String,
    required: true,
  } }
   );
   const pharmamed = new Schema({
    name: String,
    price: Number,
    description: String,
    availableQuantity: Number,
    sales: Number,
  });

const Medicine = mongoose.model('Medicine', medicineSchema);
const Medicine2 = mongoose.model('Medicine2', pharmamed);
module.exports = Medicine;
