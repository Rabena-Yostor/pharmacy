const express = require('express');
const medicine = require('../models/medicineModel')
const{
    getAllMedicines,
    getMedicine,
    addMedicine,
    deleteMedicine,
    updateMedicine
} = require('../controllers/medicineController')
const router = express.Router()

router.get('/',getAllMedicines)

router.get('/:id', getMedicine)

router.post('/', addMedicine)

router.delete('/:id',deleteMedicine)

router.patch('/:id', updateMedicine)

module.exports = router