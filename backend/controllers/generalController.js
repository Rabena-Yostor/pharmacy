const Medicine = require('../models/medicineModel.js');
const { default: mongoose } = require('mongoose');

// const addMedicine = async (req, res) => {
//     try{
//         const Name = req.body.Name.toLowerCase()
//         const MedicineID = req.body.MedicineID
//         //const {Name, MedicineID} = req.body
//         const newMedicine = new Medicine ({Name, MedicineID})
//         await newMedicine.save()
//         res.status(201).json(newMedicine)
//     }
//     catch(error){
//         res.status(409).json({error: error.message})
//     }
// }

const searchMedicine = async (req, res) => {
    const  name  = req.query.query.toLowerCase();
    try {
        const medicine = await Medicine.findOne({ name: name });
        if (medicine == null){
            console.log("medicine is not found")
            res.status(404).json({ message: "Medicine not found" });
        }
        else{
            res.status(200).json([medicine]);
            console.log("medicine is found")
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log("medicine is not found")
    }
    // app.listen(4000, () => {
    //     console.log(`Server is running on port ${port}`);
    //   });
}

module.exports = {searchMedicine};