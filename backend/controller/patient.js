// controllers/medicineController.js
const Medicine = require('../models/medicine.js');


const showMedicine = async (req, res) => {

  const medicines = await Medicine.find();
  
   if (!medicines)
   {
    return res.status(404).json({error: 'no medicine'})
   }
   
   res.status(200).json(medicines);
 
 
  }
;

module.exports={showMedicine};