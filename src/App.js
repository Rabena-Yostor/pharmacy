// External variables
const express = require("express");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require("dotenv").config();
const {viewPharmacistRequest, viewPharmacistsRequests} = require("./Routes/adminController");
const {searchMedicine} = require("./Routes/generalController");
const MongoURI = process.env.MONGO_URI ;


//App variables
const app = express();
const port = process.env.PORT || "4000";
//const user = require('./Models/User');
// #Importing the userController

//search for a medicine


// configurations
// Mongo DB
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Virtual Pharmacy!");
});
app.get("/viewPharmacistRequest", viewPharmacistRequest);
app.get("/viewPharmacistsRequests", viewPharmacistsRequests);
app.get("/searchMedicine", searchMedicine);
//app.post("/addMedicine", addMedicine)
//app.post("/createPharmacistRequest", createPharmacistRequest);