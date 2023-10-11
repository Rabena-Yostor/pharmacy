const addPatient = require('../models/regesterAsPatient');
const mongoose = require('mongoose');

//create new patient
const createPatient = async(req, res) => {
    const{UserName,Name,Email,Password,DateOfBirth,Gender,MobileNumber,EmergencyContact }=req.body
    try{
        const patient = await addPatient.create({UserName,Name,Email,Password,DateOfBirth,Gender,MobileNumber,EmergencyContact })
        res.status(201).json({patient})
    }
    catch(errorr){
        res.status(400).json({error: 'Admin could not be created'})
    }
    
}
//get all patients
const getAllPatients = async(req, res) => {
    try{
        const patients = await addPatient.find()
        res.status(200).json({patients})
    }catch(error){
        res.status(400).json({message: 'cannot get all patients'})
    }
}
module.exports = {  
    createPatient,
    getAllPatients
}