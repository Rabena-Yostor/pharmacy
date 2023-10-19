const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Request_register_as_pharmacist = new mongoose.Schema({
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




}, {timestamps: true})



module.exports = mongoose.model('Request_register_as_pharmacist',Request_register_as_pharmacist)



