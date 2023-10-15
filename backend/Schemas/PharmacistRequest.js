const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PharmacistRequest = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  PharmacistID: {
    type: Number,
    required: true,
  },
  PharmacyDegree: {
    type: String,
    required: true,
  },
  WorkingLicenses: [{
    type: String,
    required: true,
  }]
}, { timestamps: true });

 
module.exports = mongoose.model('Pharmacist request', PharmacistRequest);