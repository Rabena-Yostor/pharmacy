// controllers/medicineController.js
const Medicine = require('../models/medicine');

const showMedicine = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.render('index', { medicines });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const iewMedicineDetails = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.render('medicineDetails', { medicines });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};