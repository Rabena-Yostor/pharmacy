// routes/medicineRoutes.js

const express = require('express');
const router = express.Router();
const pharma = require('../controller/pharma');
const patient = require('../controller/patient');
const admin = require('../controller/adminstrator');

router.get('/show', admin.showMedicine);


module.exports = router;
