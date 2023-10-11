

const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
const MongoURI = process.env.MONGO_URI ;
const PORT = process.env.PORT || 3000;

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

const medicineRoutes = require('./routes/pharmacy');

app.set('view engine', 'ejs');

app.use('/', medicineRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/medicine", showMedicine);