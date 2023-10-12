const { mongo, default: mongoose } = require('mongoose')
const Medicine = require('../models/medicineModel')

// get all patients
const getAllMedicines = async(req,res)=>{
    const medicines = await Medicine.find({})
    res.status(200).json(medicines)
}

// get a specific patient(Search for one)
const getMedicine = async(req,res)=>{
    const {id} = req.params
    const { name } = req.query;
    const medicine = await Medicine.find({ name: { $regex: new RegExp(name, 'i') } })

    if(!patient){
        return res.status(404).json({error:'No Patient'})
    }
    res.status(200).json(medicine)

}

// create a patient
const addMedicine = async (req, res) => {
    const { name , details, price,available_quantity} = req.body
    try {
        const medicine = await Medicine.create({ name,details, price,available_quantity})
        res.status(200).json(medicine)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a patient
const deleteMedicine = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error: 'No Patient' })
    }
    const medicine = await Medicine.findOneAndDelete({_id: id})
    
    if(!medicine){
        return res.status(400).json({ error: 'No Patient' })
    }

    res.status(200).json(medicine)
}

//update patient info
const updateMedicine = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error: 'No Patient' })
    }
    const medicine = await Medicine.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!medicine){
        return res.status(400).json({ error: 'No Patient' })
    }

    res.status(200).json(medicine)
}
module.exports = {
    getAllMedicines,
    getMedicine,
    addMedicine,
    deleteMedicine,
    updateMedicine
}