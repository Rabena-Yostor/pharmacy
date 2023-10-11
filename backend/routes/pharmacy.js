// routes/medicineRoutes.js

const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');

router.get('/', medicineController.showMedicine);

module.exports = router;
