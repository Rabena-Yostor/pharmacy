// controllers/medicineController.js
const Medicine = require('../models/medicine');

const showMedicine = async (req, res) => {


  const medicines = await Medicine.find();
  
   if (!medicines)
   {
    return res.status(404).json({error: 'no medicine'})
   }
   
   res.send({price,description,imageUrl});
 
 
  }
;
const viewMedicineDetails = async (req, res) => {

  
    const view = await Medicine.find();
    if (!view)
   {
    return res.status(404).json({error: 'no medicine'})
   }

   res.send({sales,quantity});
   
};

module.exports={showMedicine};
module.exports={viewMedicineDetails};