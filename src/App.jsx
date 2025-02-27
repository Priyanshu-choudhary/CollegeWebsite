import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/firstPage';
import Navbr from './NavBr/Navbar';
import Test from './Home/Test/test';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
 
      </Routes>
    </Router>
  );
}

export default App;
