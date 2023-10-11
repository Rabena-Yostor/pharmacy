// controllers/medicineController.js
const Medicine = require('../models/medicine');

const showMedicine = async (req, res) => {

  const medicines = await Medicine.find();
  
   if (!medicines)
   {
    return res.status(404).json({error: 'no medicine'})
   }
   
   res.status(200).json(medicines);
 
 
  }
;
const iewMedicineDetails = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.render('medicineDetails', { medicines });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};