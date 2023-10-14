import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewAllMedicines from './components/ViewAllMedicines';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-medicines" element={<ViewAllMedicines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
