import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MedicineInfo from './components/ViewMed';
import MedicineDetails from './components/ViewMedDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-medicines" element={<MedicineInfo />} />
          <Route path="/filter-medicines" element={<MedicineDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
