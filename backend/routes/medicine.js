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
    getAllPatients,
    addAddress,
    getWallet,
    
}=require('../controllers/RegesterPatientController')

const{
    createPharmacist,
    getAllPharmacist
} = require('../controllers/requestPharmacistController')

const{
    createAdmin,
    getAllAdmins
} = require('../controllers/addAdminController')

const{
    viewPharmacistRequest,
    viewPharmacistsRequests,
    viewPatientInfo,
    
} = require('../controllers/adminController')

const {
    searchMedicine
} = require('../controllers/generalController')

const {
    addMedicineToCart,
    getCartItems,
    deleteMedicineFromCart,
    changeQuantityInCart,
    getAddresses,
    zeroAmount,
    checkOut,
    chooseAddress,
    payWithWallet,
    viewOrders,
    removeOrder,
    payment,
    
} = require ('../controllers/cartController')

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

router.get('/view',pharma.viewMedicineDetails )

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

router.get("/viewPharmacistRequest", viewPharmacistRequest);
router.get("/viewPharmacistsRequests", viewPharmacistsRequests);
router.get("/searchMedicine", searchMedicine);
router.get('/patientinfo',viewPatientInfo)


//Hamouda Cart!
router.post('/addMedicineToCart/:UserName/:name', addMedicineToCart);
router.get('/getCartItems/:UserName', getCartItems);
router.delete ('/deleteMedicineFromCart/:UserName/:name', deleteMedicineFromCart);
router.put('/changeQuantityInCart/:UserName/:name/:newQuantity', changeQuantityInCart);
router.post('/addAddress/:UserName', addAddress);
router.get('/getAddresses/:UserName', getAddresses);
router.put('/zeroAmount/:UserName', zeroAmount);
router.put('/checkOut/:UserName', checkOut);
router.put('/chooseAddress/:UserName', chooseAddress);
router.get('/getWallet/:UserName', getWallet);
router.put('/payWithWallet/:UserName', payWithWallet);
router.get('/viewOrders/:UserName', viewOrders);
router.delete('/removeOrder/:UserName/:orderId', removeOrder);
router.post('/payment', payment);
//Hamouda Cart!
module.exports = router