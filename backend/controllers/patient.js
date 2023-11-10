// controllers/medicineController.js
const Medicine = require('../models/medicineModel.js');
const bcrypt = require('bcrypt');
const Patient = require('../models/regesterAsPatient.js');


const showMedicine = async (req, res) => {

  const medicines = await Medicine.find();

  if (!medicines) {
    return res.status(404).json({ error: 'no medicine' })
  }
  const simplifiedMedicines = medicines.map(({ name, price, details, imageUrl }) => ({
    name,
    price,
    details,
    imageUrl,
  }));

  res.status(200).json(simplifiedMedicines);

};

const changePassword = async (req, res) => {
  const { username, currentPassword, newPassword } = req.body;

  try {
    // Find the pharmacist by username
    const pharmacist = await Patient.findOne({ UserName: username });

    if (!pharmacist) {
      return res.status(404).json({ message: 'Pharmacist not found' });
    }

    // Validate the current password using bcrypt
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, pharmacist.Password);

    if (!isCurrentPasswordValid) {
      return res.status(401).json({ message: 'Invalid current password' });
    }

    // Update the password with the new one
    pharmacist.Password = await bcrypt.hash(newPassword, 10);
    await pharmacist.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = { showMedicine , changePassword};