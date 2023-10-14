// routes/medicineRoutes.js

const express = require('express');
const router = express.Router();
const pharma = require('../controller/pharma');
const patient = require('../controller/patient');
const admin = require('../controller/admin');
const Medicine = require('../models/medicine');

router.post('/add', async (req, res) => {
    try {
      const { Name, price, description, imageUrl, quantity, sales } = req.body;
  
      const newMedicine = new Medicine({
        Name,
        price,
        description,
        imageUrl,
        quantity,
        sales,
      });
  
      const savedMedicine = await newMedicine.save();
      res.json(savedMedicine);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

router.get('/show/admin', admin.showMedicine);
router.get('/show/patient', patient.showMedicine);
router.get('/show/pharma', pharma.showMedicine);

router.get('/view',pharma.viewMedicineDetails )


module.exports = router;