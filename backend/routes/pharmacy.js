// routes/medicineRoutes.js

const express = require('express');
const router = express.Router();
const pharma = require('../controller/pharma');
const patient = require('../controller/patient');
const admin = require('../controller/admin');

router.get('/show/admin', admin.showMedicine);
router.get('/show/patient', patient.showMedicine);
router.get('/show/pharma', pharma.showMedicine);

router.get('/view',pharma.viewMedicineDetails )


module.exports = router;