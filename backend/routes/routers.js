const express = require('express')

const {filterMedicine,createMedicine} = require('../controllers/pharmacyController')

const router = express.Router()
//FILTER MEDICINE BASED ON MEDICINALUSE
router.get('/filterMedicine',filterMedicine)
//
//POST
router.post('/create',createMedicine)

module.exports = router