import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/firstPage';
import Navbr from './NavBr/Navbar';
import Test from './Home/Test/test';
import Courses from './Courses/Courses';
import Events from './Events/Events';
import Falculty from './Faculty/Falculty';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Faculty" element={<Falculty />} />
      </Routes>
    </Router>
  );
}

export default App;
