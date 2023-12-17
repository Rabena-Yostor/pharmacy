# El7a2ny Pharmacy System

## Introduction

El7a2ny Pharmacy System is a comprehensive solution designed to streamline the operations of pharmacies within a virtual clinic setup. It caters to patients, pharmacists, and administrators, enabling efficient management of medicine inventory, patient prescriptions, and order processing.

## Motivation

This system was developed to facilitate a seamless interaction between patients and pharmacists, ensuring that medication is dispensed accurately and efficiently, with an emphasis on ease of use and patient safety.

## Build Status

1. The project is currently under development.
2. Design for error should be improved.
3. Need to implement unit testing.
4. The website is still not deployed.

## Code Style

- Standard Code style that is easy for anyone to understand.
- Async/Await: using async/await, which is good. Make sure to handle errors with a try-catch block.

## Screenshots

https://drive.google.com/drive/folders/1WsuQWJ4TuuZTmmmtbOdzypNV_fY6gGSW?usp=sharing

## Tech/Framework Used

- MongoDB
- Express.js
- React
- Node.js
- Axios
- Stripe

## Features

- Patient account management
- Real-time inventory tracking
- Prescription processing and validation
- Sales reporting and analytics
- Secure pharmacist registration and authentication
- Paying with credit card or visa.
- Refunding money to the wallet for further use.
- Reporting issues and following up on their status.

## Code Examples

### Server.js

Example for the `server.js` file:

```javascript
// Your server.js code here
```

### Medicine Model

Here is the medicine model example:

```javascript
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
    },
    medicinalUse: {
        type: String,
    },
    dosage: {
        type: String,
    },
    details: {
        type: String,
        required: true,
    },
  
    imageUrl: {
        type: String,
        default: 'https://www.default.com',
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    prescriptionRequired: {
        type: Boolean,
    },
    sales: {
        type: Number,
    },
    archived: {
        type: Boolean,
        default: false
    }  ,
    activeIngredient: {
        type: String, // Single active ingredient
        required: true,
    }, 

}, { timestamps: true });

module.exports = mongoose.model('Medicine', medicineSchema);

```

### Medicine Controller

Example of the medicine controller:

```javascript
const { mongo, default: mongoose } = require('mongoose')
const Medicine = require('../models/medicineModel')

// get all patients
const getAllMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find({ archived: false });
        res.status(200).json(medicines);
    } catch (error) {
        // Handle error
        console.error('Error fetching medicines:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllMedicinesPharmacist = async (req, res) => {
    try {
        const medicines = await Medicine.find({});
        res.status(200).json(medicines);
    } catch (error) {
        // Handle error
        console.error('Error fetching medicines:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const archiveMedicine = async(req,res)=>{
    const {id} = req.params
    const medicine = await Medicine.findOneAndUpdate({_id: id}, {archived: true})
    if(!medicine){
        return res.status(400).json({ error: 'No such Medicine' })
    }
    res.status(200).json(medicine)
}

const unarchiveMedicine = async(req,res)=>{
    const {id} = req.params
    const medicine = await Medicine.findOneAndUpdate({_id: id}, {archived: false})
    if(!medicine){
        return res.status(400).json({ error: 'No such Medicine' })
    }
    res.status(200).json(medicine)
}

// get a specific patient(Search for one)
const getMedicine = async(req,res)=>{
    const {id} = req.params
    const { name } = req.query;
    const medicine = await Medicine.find({ name: { $regex: new RegExp(name, 'i') } })

    if(!patient){
        return res.status(404).json({error:'No Patient'})
    }
    res.status(200).json(medicine)

}

// create a medicine
const addMedicine = async (req, res) => {
    const { name, manufacturer,medicinalUse,dosage,details,imageURL,price,quantity,prescriptionRequired,sales } = req.body
    try {
        const medicine = await Medicine.create({ name, manufacturer,medicinalUse,dosage,details,imageURL,price,quantity,prescriptionRequired,sales})
        res.status(200).json(medicine)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a patient
const deleteMedicine = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error: 'No Patient' })
    }
    const medicine = await Medicine.findOneAndDelete({_id: id})
    
    if(!medicine){
        return res.status(400).json({ error: 'No Patient' })
    }

    res.status(200).json(medicine)
}

//update patient info
const updateMedicine = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error: 'No Patient' })
    }
    const medicine = await Medicine.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!medicine){
        return res.status(400).json({ error: 'No Patient' })
    }

    res.status(200).json(medicine)
}

//HAMOUDA FOLDER

const filterMedicine = async (req, res) => {
    try {
        const { medicinalUse } = req.query;

        if (!medicinalUse) {
            return res.status(400).json({ error: 'Medicinal use parameter is required' });
        }
        

        const medicines = await Medicine.find({ medicinalUse });

        if (medicines.length === 0) {
            return res.status(404).json({ error: 'No medicines found with the specified medicinal use' });
        }

        res.status(200).json(medicines);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// END HAMOUDA
module.exports = {
    getAllMedicines,
    getMedicine,
    addMedicine,
    deleteMedicine,
    updateMedicine,
    filterMedicine,
    archiveMedicine,
    unarchiveMedicine,
    getAllMedicinesPharmacist
}
```

### Frontend Shopcart Page

Frontend shopcart page example:

```javascript
import React, { useState, useEffect } from 'react';
import CartIcon from '../components/CartIcon';

function Store() {
  const [medicines, setMedicines] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [walletBalance, setWalletBalance] = useState(0);

  const [alternatives, setAlternatives] = useState([]); // Initialize alternatives state to an empty array

  useEffect(() => {
    // Fetch medicine details when the component mounts
    fetchMedicines();
    fetchWalletBalance();
  }, []);
  const fetchWalletBalance = async () => {
    try {
      // Replace 'username' with the actual username or get it dynamically
      const username = localStorage.getItem('username');
      const response = await fetch(`http://localhost:4000/api/medicine/getWallet/${username}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Entire Response:', data);  // Log the entire response
      setWalletBalance(data.wallet);

    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };
  const fetchMedicines = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/medicine/getAllMedicines');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMedicines(data);

      console.log('Fetched Medicines:', data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  const addToCart = async (medicineName) => {
    try {
      const UserName = localStorage.getItem('username') ; 
      const response = await fetch(`http://localhost:4000/api/medicine/addMedicineToCart/${UserName}/${medicineName}`, {
        method: 'POST',
      });

      if (!response.ok) {
        const data = await response.json();
        
        setErrorMessage(data.message); // Display the error message on the frontend
        setSuccessMessage(''); // Clear any existing success message
        return;
      }
      if(response.ok){
      const data = await response.json();
      console.log('Message', data.message);
      if (data.message === 'Medicine out of stock' && data.alternatives.length > 0){
        setSuccessMessage('Medicine not in Stock. Choose an Alternative below');
        setAlternatives(data.alternatives);
        setErrorMessage(''); // Clear any existing error message
        console.log('Alternatives:' , data.alternatives);
        return;
       
      }
      
      console.log('Added to Cart:', data);
      setErrorMessage(''); // Clear any existing error message
      setSuccessMessage('Medicine added to cart successfully');
      setAlternatives([]); // Clear alternatives in case there were any

       setTimeout(() => {
        window.location.reload();
      }, 500);
      
     
      }
    } catch (error) {
      console.error('Error adding medicine to cart:', error);
      setErrorMessage('Something went wrong. Please try again.'); // Display a generic error message
      setSuccessMessage(''); // Clear any existing success message
      setAlternatives([]); // Clear alternatives in case there were any

    }
  };
  const handleViewOrders = async () => {
    window.location.href = '/viewOrders';
  }
  return (
    <div>
      <h1>Medicine Store</h1>
      <p style={{ position: 'absolute', top: 200, right: 300 }}>Wallet Balance: {walletBalance} EGP</p>
      <button style = {{position: 'absolute', top: 200, right: 10}} onClick={handleViewOrders}>View Orders</button> 

      <CartIcon />
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine._id}>
            {medicine.name} - {medicine.manufacturer} - {medicine.dosage} - {medicine.medicinalUse} - {medicine.price} EGP
            <button onClick={() => addToCart(medicine.name)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}


      {/* Display alternatives if available */}
    {alternatives.length > 0 && (
      <div>
        <p>Alternatives:</p>
        <ul>
          {alternatives.map((alternative) => (
            <li key={alternative._id}>
              {alternative.name} - {alternative.manufacturer} - {alternative.dosage} - {alternative.medicinalUse} - {alternative.price} EGP
              <button onClick={() => addToCart(alternative.name)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    )}
    </div>
  );
}

export default Store;

```

### App.js

Frontend `app.js` example:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePeter from './pages/PeterHome'
import Navbar from './components/Navbar';
import HomePage from './pages/Landing';
import Filter from './pages/Filter';
import HanaHome from './pages/HanaHome';
import MedicineInfo from './components/ViewMed';
import MedicineDetails from './components/ViewMedDetails';
import AddPharmacist from './pages/addPharmacist';
import AddAdmin from './pages/addAdmin';
import RegiesteAsPatient from './pages/regiesteAsPatient';
import ViewPatientInfo from './pages/ViewPatientInfo';
import KhaledHome from './pages/KhaledHome';
import SearchBar from './components/Searchbar';
import ShopCart from './pages/ShopCart.js';
import CheckoutPage from './pages/CheckoutPage.js';
import ViewOrders from './pages/ViewOrders.js';
import Payment from'./pages/Payment.js';
import Completion from './components/Completion.js';
import Login from './pages/Login';
import ChangePassword from './pages/ChangePassword';
import ResetPassword from './pages/ResetPassword';
import NotificationPage from './pages/Notifications';
import ConversationPage from './pages/Conversation.js';
import HomePagePatient from './pages/HomePagePatient';
import HomePagePharma from './pages/HomePagePharma';
import HomePageAdmin from './pages/HomePageAdmin';
import ViewSalesReport from './pages/viewSalesReport';
import FilterPatient from './pages/FilterPatient';
import ViewSalesReportAdmin from './pages/viewSalesReportAdmin';
import MedicineSearch from './pages/MedicineSearch';
import ConversationPagePatient from './pages/PatientConversations.js';
import DoctorConversation from './pages/DoctorConversation.js';
function App() {
  return (
    <div className="container">
    <div className="content">
      <BrowserRouter>
      {/* <SearchBar /> */}
        <Navbar />
        <div className="pages">
          <Routes>
          <Route path="/peter" element={<HomePeter />} />
            <Route path="/" element={<Login />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/landing" element={<HomePage />} />
            <Route path="/hamouda" element={<Filter />} />
            <Route path="/view-medicines" element={<MedicineInfo />} />
            <Route path="/filter-medicines" element={<MedicineDetails />} />
            <Route path="/hazem1" element={<AddPharmacist />} />
            <Route path="/hazem2" element={<AddAdmin />} />
            <Route path="/hazem3" element={<RegiesteAsPatient />} />
            <Route path="/malak" element={<ViewPatientInfo />} />
            <Route path="/khaled" element={<div><MedicineSearch /></div>} />
            <Route path="/khaledRequests" element={<div>< KhaledHome/></div>} />

            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path = "/conversation" element = {<ConversationPage />} />      

            <Route path="/shop" element={<ShopCart />} />
            <Route path = "/checkout" element={<CheckoutPage />} />
            <Route path = "/viewOrders" element = {<ViewOrders />} />
            <Route path = "/payment" element = {<Payment />} />
            <Route path = "/completion" element = {<Completion />} />
            <Route path = "/patient" element = {<HomePagePatient />} />
            <Route path = "/pharmacist" element = {<HomePagePharma />} />
            <Route path = "/admin" element = {<HomePageAdmin />} />
            <Route path="/viewSalesReport" element={<ViewSalesReport />} />

            <Route path="/filter-patient" element={<FilterPatient />} />
            <Route path="/viewSalesReportAdmin" element={<ViewSalesReportAdmin />} />
            <Route path="/patientConv" element={<ConversationPagePatient />} />
            <Route path="/doctorConv" element={<DoctorConversation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;

```

## Installation

1. Clone the repository from GitHub.
2. Create a `.env` file and add the following:

```env
PORT=4000
MONGO_URI = 'mongodb+srv://ahmedhamouda776:ACL123@rabenayostor.5zgv8bz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
STRIPE_PUBLISHABLE_KEY="pk_test_51O4R2WJ6reglJIMrbT7RTKyuwYmIFnSp0hbD9CKUiQJp7uw0ZoV6ClIimQ1CnkIXxf8mxYEHE4ouO2vWRCTcnw7t00p5tUfsb3"
STRIPE_SECRET_KEY="sk_test_51O4R2WJ6reglJIMrC5OBVfvk5frEdn3RLdV51Z9HrEFMyY9jJPIaSw4yrGX1XZMwu2FP5Dl9AZ5ep5gP9TYBi0oP00zMiFnOTc"

```

3. Open a new terminal.
4. Navigate to the `backend` directory.
5. Run `npm install` followed by `node server.js`.
6. Open a new terminal.
7. Navigate to the `frontend` directory.
8. Run `npm install` followed by `npm start`.

## API References

(All method names are the same as their Functionality)

... (Include your API references here)

## Tests

Testing for now using Postman and MongoDB.

## How to Use?

1. **Login:**
   - Select user type (patient/admin/Pharmacist).
   - Type your username/password then login.
   - Option to reset your password, and an OTP will be sent to your mail.
   - If you don’t have a username and password, you can register.

2. **Logout:**
   - Press the logout button.

3. **Pharmacist:**
   - If logged in as a pharmacist, you can add/edit medicines, shop, view all medicines, and add admins/pharmacists.

4. **Admin:**
   - Similar functionalities as the pharmacist.

5. **Patient:**
   - Register as a patient, view basic info, search, and view medicines.

## Contribute

We welcome contributions from the community to enhance the project. Whether you want to report a bug, propose a new feature, or submit a pull request, here's how you can contribute:

1. Clone the repository.
2. Install dependencies.
3. Create a branch and do your work.
4. Provide messages for the creators to view.
5. Commit and push your work.
6. Wait for the creator to view your work and to be merged if master approved upon.

Feedback is valuable! If you have suggestions or questions, feel free to reach out. Thank you for contributing!

## Credits

We used online YouTube video channel: Net Ninja (MERN stack crash course).

We would like to extend our thanks to the following individuals for their contributions to this project:


- Hana Elmoatasem
- Peter Ashraf
- Ahmed Hamouda
- Khaled Magdy
- Malak Wael
- Peter Youssef
- Mohamed Ahmed
- Hazem Nasser

Without the help of these individuals, this project would not have been possible. Thank you for your support!

## License

This project uses Stripe to process. By using this project, you agree to be bound by the Stripe Services Agreement.

You can find the full text of the Stripe Services Agreement at the following link: [Stripe Legal](https://stripe.com/legal).

Please make sure to read and understand the Stripe Services Agreement before using this project. If you have any questions about the Stripe Services Agreement or how it applies to your use of this project, please contact Stripe at support@stripe.com.
