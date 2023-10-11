const Medicine = require('../models/pharmacyModel')
const mongoose = require('mongoose')


const getMedicines = async (req, res) => {
    const medicines = await Medicine.find({}).sort({createdAt: -1})
  
    res.status(200).json(medicines)
  }

const filterMedicine = async (req, res) => {
    try {
        const { medicinalUse } = req.body;

        if (!medicinalUse) {
            return res.status(400).json({ error: 'Medicinal use parameter is required' });
        }

        const medicines = await Medicine.find({ medicinalUse });

        if (medicines.length === 0) {
            return res.status(404).json({ error: 'No medicines found with the specified medicinal use' });
        }

        res.status(200).json(medicines);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const createMedicine = async (req, res) => {
    const { name, manufacturer, medicinalUse, dosage, price, quantity, prescriptionRequired } = req.body;

    try {
        const medicine = await Medicine.create({
            name,
            manufacturer,
            medicinalUse,
            dosage,
            price,
            quantity,
            prescriptionRequired,
        });

        res.status(201).json(medicine); // Use 201 for resource creation
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




module.exports = {
    createMedicine,
    filterMedicine,
    getMedicines
}