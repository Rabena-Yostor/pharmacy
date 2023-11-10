const express = require('express');
const medicine = require('../models/medicineModel')
const{
    getAllMedicines,
    getMedicine,
    addMedicine,
    deleteMedicine,
    updateMedicine,
    filterMedicine
} = require('../controllers/medicineController')

const{
    createPatient,
    getAllPatients
    
    
}=require('../controllers/RegesterPatientController')

const{
    createPharmacist,
    getAllPharmacist,
    uploadMiddleware
} = require('../controllers/requestPharmacistController')

const{
    createAdmin,
    getAllAdmins
} = require('../controllers/addAdminController')

const{
    viewPharmacistRequest,
    viewPharmacistsRequests,
    viewPatientInfo,
    rejectPharmacistRequest,
    acceptPharmacistRequest,
    login
} = require('../controllers/adminController')

const {
    searchMedicine
} = require('../controllers/generalController')

const { changePassword } = require('../controllers/patient');

const pharma = require('../controllers/pharma');
const patient = require('../controllers/patient');
const admin = require('../controllers/admin');
const router = express.Router()

router.get('/getAllMedicines',getAllMedicines)

router.get('/getMedicine/:id', getMedicine)

router.post('/addMedicine', addMedicine)

router.delete('/deleteMedicine/:id',deleteMedicine)

router.patch('/updateMedicine/:id', updateMedicine)

router.get('/filterMedicine',filterMedicine)

router.get('/show', admin.showMedicine);
router.get('/show/admin', admin.showMedicine);
router.get('/show/patient', patient.showMedicine);
router.get('/show/pharma', pharma.showMedicine);

router.post('/change-password', changePassword);

router.get('/view',pharma.viewMedicineDetails )

//post new patient
router.post('/createPatient',createPatient)

//post new pharmacist
router.post('/createPharmacist',uploadMiddleware, createPharmacist)

//post new admin 
router.post('/admin', createAdmin)
//get all patients
router.get('/getAllPatients',getAllPatients)
//get all admins
router.get('/getAllAdmins',getAllAdmins)
//get all pharmacist
router.get('/getPharmacist',getAllPharmacist)
//reject a pharmacist request
router.delete('/rejectPharmacistRequest/:UserName',rejectPharmacistRequest)
//accept a pharmacist request
router.post('/acceptPharmacistRequest/:UserName',acceptPharmacistRequest)

//login
router.post('/login', pharma.login);

router.get("/viewPharmacistRequest", viewPharmacistRequest);
router.get("/viewPharmacistsRequests", viewPharmacistsRequests);
router.get("/searchMedicine", searchMedicine);
router.get('/patientinfo',viewPatientInfo)

module.exports = router