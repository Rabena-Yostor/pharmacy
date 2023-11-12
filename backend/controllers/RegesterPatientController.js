const addPatient = require('../models/regesterAsPatient');
const mongoose = require('mongoose');
const Cart = require('../models/cartModel'); // (HAMOUDA)


// Create a new Cart document. (HAMOUDA)
const createCart = async (patientId) => {
    const cart = new Cart({
        patient: patientId,
    });

    // Save the Cart document to the database without validation
    await cart.save({ validateBeforeSave: false });

    return cart;
};

 

//create new patient
const createPatient = async (req, res) => {
    const { UserName, Name, Email, Password, DateOfBirth, Gender, MobileNumber, EmergencyContact } = req.body;
    try {
        const patient = await addPatient.create({
            UserName,
            Name,
            Email,
            Password,
            DateOfBirth,
            Gender,
            MobileNumber,
            EmergencyContact,
        });

        // Pass the patient._id to createCart
        const updatedCart = await createCart(patient._id);

        // Update the patient with the new cart
        patient.cart = updatedCart._id;
        await patient.save();

        res.status(201).json({ patient });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Patient could not be created' });
    }
};



//get all patients
const getAllPatients = async(req, res) => {
    try{
        const patients = await addPatient.find()
        res.status(200).json({patients})
    }catch(error){
        res.status(400).json({message: 'cannot get all patients'})
    }
}


// Add an address to a patient (hamouda)
const addAddress = async (req, res) => {
    try {
      const { UserName } = req.params;
      const { street, city, state, zipCode } = req.body;
  
      const patient = await addPatient.findOne({ UserName });
  
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }

         // Check if the address already exists
    const existingAddress = patient.addresses.find(
        (address) =>
          address.street === street &&
          address.city === city &&
          address.state === state &&
          address.zipCode === zipCode
      );
      if (existingAddress) {
        return res.status(400).json({ message: 'Address already exists' });
      }
  
      // Add the new address to the addresses array
      const newAddress = { street, city, state, zipCode };
      patient.addresses.push(newAddress);
  
      // Save changes to the patient
      await patient.save();
  
      return res.status(201).json({ message: 'Address added successfully', address: newAddress });
    } catch (error) {
      return res.status(500).json({ message: 'Error adding address' });
    }
  };

  const getWallet = async (req, res) => {
    try {
      const { UserName } = req.params;
  
      const patient = await addPatient.findOne({ UserName });
  
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      return res.status(200).json({ wallet: patient.wallet });
    } catch (error) {
      return res.status(500).json({ message: 'Error getting wallet' });
    }
  };

module.exports = {  
    createPatient,
    getAllPatients,
    addAddress,
    getWallet,
}