import { BrowserRouter ,  Routes, Route } from 'react-router-dom';  
//pages and components
import AddAdmin from './pages/addAdmin';
import Navbar from './components/Navbar';


function App() {
 //return addAdmin
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <addAdmin/>
      
      <div className="pages">
        <Routes>
          <Route
           path="/"
           element={<AddAdmin/>} 
           />
        </Routes>
      </div>
      </BrowserRouter>
    </div>

    
  );

}

export default App;
