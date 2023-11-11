require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const medicineroute = require('./routes/medicine')
const app = express();
const cors = require('cors')



app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
app.use(cors() )
app.use(express.json())

app.use('/api/medicine',medicineroute)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log('connected to db & listening on port',process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })


