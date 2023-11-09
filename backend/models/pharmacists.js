const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pharmacists = new mongoose.Schema({
UserName: {
    type: String,
    required: true
},
Name: {
    type: String,
    required: true
},  
Email: {
    type: String,
    required: true
},
Password: {
    type: String,
    required: true
},
DateOfBirth: {
    type: Date,
    required: true
},

HourlyRate: {
    type: Number,
    required: true
},
AffiliatedHospital: {
    type: String,
    required: true
},
Education: {
    type: String,
    required: true
},
idFile: {
    data: Buffer,
    contentType: String,
},
degreeFile: {
    data: Buffer,
    contentType: String,
},
licenseFile: {
    data: Buffer,
    contentType: String,
},



}, {timestamps: true})



module.exports = mongoose.model('pharmacists',pharmacists)



