const PharmacistRequest = require('../Schemas/PharmacistRequest.js');

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
    const { PharmacistID } = req.body;
    try {
        const pharmacistRequest = await PharmacistRequest.findOne({ PharmacistID: PharmacistID });
        res.status(200).json(pharmacistRequest);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports = {viewPharmacistRequest, viewPharmacistsRequests};