import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Filter from './pages/Filter'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/"element={<Home /> }/>
            <Route path="/filterMedicine" element={<Filter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
