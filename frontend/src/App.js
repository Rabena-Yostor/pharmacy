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


function App() {
  return (
    <div className="App">
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
            <Route path="/khaled" element={<div><KhaledHome /><SearchBar /></div>} />

            <Route path="/reset-password" element={<ResetPassword />} />

            <Route path="/shop" element={<ShopCart />} />
            <Route path = "/checkout" element={<CheckoutPage />} />
            <Route path = "/viewOrders" element = {<ViewOrders />} />
            <Route path = "/payment" element = {<Payment />} />
            <Route path = "/completion" element = {<Completion />} />

      
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
