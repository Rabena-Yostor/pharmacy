const Medicine = require('../Schemas/Medicine.js');
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
    const  Name  = req.query.query.toLowerCase();
    try {
        const medicine = await Medicine.findOne({ Name: Name });
        if (medicine == null){
            res.status(404).json({ message: "Medicine not found" });
        }
        else{
            res.status(200).json([medicine]);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    // app.listen(4000, () => {
    //     console.log(`Server is running on port ${port}`);
    //   });
}

module.exports = {searchMedicine};