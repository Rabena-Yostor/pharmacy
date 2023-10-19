const requestRegisterAsPharmacist = require('../models/requestRegisterAsPharmacist');
const  Request = require('../models/requestRegisterAsPharmacist')
const mongoose = require('mongoose');

//create new pharmacist
const createPharmacist = async(req, res) => {
    const{UserName,Name,Email,Password,DateOfBirth,HourlyRate,AffiliatedHospital,Education} = req.body
    //const {title, reps, load} = req.body
    try{
        const pharm = await Request.create({UserName,Name,Email,Password,DateOfBirth,HourlyRate,AffiliatedHospital,Education})
        //const workout = await Workout.create({title, reps, load})      
        res.status(201).json({pharm})
    }catch(error){
        res.status(400).json({error: 'cannot create a request to be a pharmacist'})

    }
}
//get all pharmacist
const getAllPharmacist= async(req, res) => {
    try{
        const pharmacist = await requestRegisterAsPharmacist.find()
        res.status(200).json({pharmacist})
    }catch(error){
        res.status(400).json({message: 'cannot get all admins'})
    }
}






module.exports = {
    getAllPharmacist,
    createPharmacist
}