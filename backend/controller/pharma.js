// controllers/medicineController.js
const Medicine = require('../models/medicine.js');

const showMedicine = async (req, res) => {


  const medicines = await Medicine.find();
  
   if (!medicines)
   {
    return res.status(404).json({error: 'no medicine'})
   }
   const simplifiedMedicines = medicines.map(({Name, price, description, imageUrl }) => ({
    Name,
    price,
    description,
    imageUrl,
  }));
   
   res.status(200).json(simplifiedMedicines);
 
  }
;
const viewMedicineDetails = async (req, res) => {
  try {
    // Retrieve all medicines from the database
    const medicines = await Medicine.find();

    // Check if there are any medicines
    if (!medicines || medicines.length === 0) {
      return res.status(404).json({ error: 'No medicine found' });
    }

    // Create an array of medicine names
    const info = medicines.map(({Name, quantity, sales }) => ({
      Name,
      quantity,
      sales,
     
    }));

    // Send the array as response
    res.status(200).json({ info });
  } catch (error) {
    // Handle potential errors, such as database issues
    res.status(500).json({ error: 'Server error' });
  }
};


module.exports={showMedicine,viewMedicineDetails};