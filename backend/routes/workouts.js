const express = require('express')
const{
    createPatient
    
}=require('../controllers/RegesterPatientController')
//const { create } = require('../models/addAdmin')
//const Request_register_as_doctor =require('../models/WorkoutModel')
const{
    createPharmacist
} = require('../controllers/requestPharmacistController')
const{
    createAdmin
} = require('../controllers/addAdminController')


const router = express.Router()

//post new patient
router.post('/createPatient',createPatient)

//post new pharmacist
router.post('/createPharmacist',createPharmacist)

//post new admin 
router.post('/admin', createAdmin)

    
  
module.exports = router