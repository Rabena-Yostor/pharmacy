const PharmacistRequest = require('../models/requestRegisterAsPharmacist.js');
const Patient = require('../models/regesterAsPatient.js');
const { default: mongoose } = require('mongoose');

// const createPharmacistRequest = async (req, res) => {
//     try {
//         const { Name, Email, PharmacistID, PharmacyDegree, WorkingLicenses } = req.body;
//         const newPharmacistRequest = new PharmacistRequest({ Name, Email, PharmacistID, PharmacyDegree, WorkingLicenses });
//         await newPharmacistRequest.save();
//         res.status(201).json(newPharmacistRequest);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

const viewPharmacistsRequests = async (req, res) => {
    try {
        const pharmacistRequest = await PharmacistRequest.find();
        res.status(200).json(pharmacistRequest);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const viewPharmacistRequest = async (req, res) => {
    const { UserName } = req.body;
    try {
        const pharmacistRequest = await PharmacistRequest.findOne({ UserName: UserName });
        res.status(200).json(pharmacistRequest);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const viewPatientInfo= async (req, res) => {
    try {
      const { patientUsername } = req.query;
  
      // Find patient by ID in the database
      const patient = await Patient.find(patientUsername);
      console.log(patient)
  
      // Check if patient exists
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }
  
      const patientInfo = {
        username: patient.UserName,
        name: patient.Name,
        email: patient.Email,
        dateofbirth: patient.DateOfBirth,
        gender: patient.Gender,
        mobilenumber: patient.MobileNumber,
      //  emergencyfullname: patient.EmergencyContact.FullName,
       // emergencynumber: patient.EmergencyContact.MobileNumberEmergency,
        // Include other patient information fields as needed
      };
  
      res.status(200).json(patientInfo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



module.exports = {viewPharmacistRequest, viewPharmacistsRequests, viewPatientInfo};