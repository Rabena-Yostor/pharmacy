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
  },
  quantity: {
    type: Number,
    required: true,
  }, 
  sales: {
    type: Number,
    required: true,
  },}
   );
 

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
