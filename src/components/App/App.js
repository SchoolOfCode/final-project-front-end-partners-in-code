import './App.css';
import Homepage from '../Homepage/Homepage.js';
import ContactPage from '../ContactPage/ContactPage';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
  
      <Link to="/contact">ContactPage</Link>
    
    
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
