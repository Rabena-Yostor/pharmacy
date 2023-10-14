import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewAllMedicines from './components/ViewAllMedicines';
import FilterMedicines from './components/FilterMedicines';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-medicines" element={<ViewAllMedicines />} />
          <Route path="/filter-medicines" element={<FilterMedicines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
