const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Medicine = new Schema({
  Name: {
    type: String,
    required: true,
  },
  MedicineID: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

 
module.exports = mongoose.model('Medicine', Medicine);