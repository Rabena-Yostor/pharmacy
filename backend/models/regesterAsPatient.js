const mongoose = require('mongoose')
const Schema = mongoose.Schema


const regester_as_patient = new mongoose.Schema({
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
    type: String,
    required: true
},
Gender:{
    type:String,
    required:true

},
MobileNumber:{
    type:Number,
    required:true
},
//emergency contact(full name,mobile number, relation to patient)
EmergencyContact:{

    FullName:{
        type:String,
        required:true
    },
    MobileNumberEmergency:{
        type:Number,
        required:true
    },
    RelationToPatient:{
        type:String,
        required:true
    }
},
cart: {
    items: [
        {
            medicine: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
        }
    ],
    totalAmount: {
        type: Number,
        default: 0,
    },
},
addresses: [
    {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
    }
  ],
}, { timestamps: true });







module.exports=mongoose.model('regester_as_patient',regester_as_patient)

