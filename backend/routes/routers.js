const express = require('express')

const {filterMedicine,createMedicine,getMedicines} = require('../controllers/pharmacyController')

const router = express.Router()
//FILTER MEDICINE BASED ON MEDICINALUSE
router.get('/filterMedicine',filterMedicine)
//
//POST
router.post('/create',createMedicine)

//getMedicines

router.get('/get', getMedicines)

module.exports = router