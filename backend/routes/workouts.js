const express = require('express')
const{
    createPatient,
    getAllPatients
    
    
}=require('../controllers/RegesterPatientController')
//const { create } = require('../models/addAdmin')
//const Request_register_as_doctor =require('../models/WorkoutModel')
const{
    createPharmacist,
    getAllPharmacist
} = require('../controllers/requestPharmacistController')
const{
    createAdmin,
    getAllAdmins
} = require('../controllers/addAdminController')


const router = express.Router()

//post new patient
router.post('/createPatient',createPatient)

//post new pharmacist
router.post('/createPharmacist',createPharmacist)

//post new admin 
router.post('/admin', createAdmin)
//get all patients
router.get('/getAllPatients',getAllPatients)
//get all admins
router.get('/getAllAdmins',getAllAdmins)
//get all pharmacist
router.get('/getPharmacist',getAllPharmacist)
    
  
module.exports = router