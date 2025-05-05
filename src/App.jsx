import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/firstPage';
import Navbr from './NavBr/Navbar';

import Courses from './Courses/Courses';
import Events from './Events/Events';


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
 
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Events" element={<Events />} />
    
      </Routes>
    </Router>
  );
}

export default App;
