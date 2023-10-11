// routes/medicineRoutes.js

const express = require('express');
const router = express.Router();
const pharma = require('../controllers/pharma');
const patient = require('../controllers/patient');
const admin = require('../controllers/admin');

router.get('/', medicineController.showMedicine);
router.get('/medicine-details', medicineController.viewMedicineDetails);

module.exports = router;
