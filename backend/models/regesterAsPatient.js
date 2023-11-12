const mongoose = require('mongoose')
const Schema = mongoose.Schema


const regester_as_patient = new mongoose.Schema({
UserName: {
    type: String,
},
Name: {
    type: String,
},  
Email: {
    type: String,
},
Password: {
    type: String,
},
DateOfBirth: {
    type: String,
},
Gender:{
    type:String,

},
MobileNumber:{
    type:Number,
},
//emergency contact(full name,mobile number, relation to patient)
EmergencyContact:{

    FullName:{
        type:String,
    },
    MobileNumberEmergency:{
        type:Number,
    },
    RelationToPatient:{
        type:String,
    }
},

}, {timestamps: true})







module.exports=mongoose.model('regester_as_patient',regester_as_patient)

