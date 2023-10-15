const express = require('express')
const mongoose = require('mongoose')
const viewRequests=require('./routes/adminRoutes')
const approveRequests=require('./routes/adminRoutes')
const rejectRequests=require('./routes/adminRoutes')
const addAdmin =require('./routes/adminRoutes')
const removeUser =require('./routes/adminRoutes')
const viewPatientInfo =require('./routes/adminRoutes')
const MongoURI = process.env.MONGO_URI ;
const dotenv =require('dotenv').config()


const cors = require('cors');
const app = express()
const port = process.env.PORT || "4000";

// Middleware
app.use(express.json())

app.use(cors());

app.use((req , res , next,) => {
    console.log(req.path, req.method)
    next()
})

app.use ('/api/patients', viewRequests)
app.use ('/api/patients', approveRequests)
app.use ('/api/patients', rejectRequests)
app.use ('/api/patients', addAdmin )
app.use ('/api/patients', removeUser)
app.use ('/api/patients', viewPatientInfo)


mongoose.connect(process.env.MONGO_URI )
.then(() => {
      console.log("MongoDB is now connected!")
      
    // Express listening for requests
    app.listen(process.env.PORT, () => { 
      console.log('listening on port', process.env.PORT)
   })

})
.catch((error) => {
    console.log(error)
})