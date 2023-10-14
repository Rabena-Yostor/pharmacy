const express=require('express')


const {CreateWorkout,getWorkout, getsingleworkout,deletework, updatework}= require('../controllers/workcontrol')

const router = express.Router()

router.get('/', getWorkout)



router.get('/:id', getsingleworkout)




router.post('/',CreateWorkout)



router.delete('/:id', deletework)

router.patch('/:id', updatework)





module.exports=router
