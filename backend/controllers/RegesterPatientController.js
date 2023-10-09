const addPatient = require('../models/regesterAsPatient');
const mongoose = require('mongoose');

//create new patient
const createPatient = async(req, res) => {
    const{UserName,Name,Email,Password,DateOfBirth,Gender,MobileNumber,EmergencyContact }=req.body
    try{
        const patient = await addPatient.create({UserName,Name,Email,Password,DateOfBirth,Gender,MobileNumber,EmergencyContact })
        res.status(201).json({patient})
    }
    catch(err){
        res.status(400).json({message: 'Admin could not be created'})
    }
}

module.exports = {  
    createPatient
}