import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/firstPage';
import Navbr from './NavBr/Navbar';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
 
      </Routes>
    </Router>
  );
}

export default App;
