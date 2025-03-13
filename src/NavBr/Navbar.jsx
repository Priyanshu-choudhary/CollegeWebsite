import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for styling
import Logo from './logo';
import AdmissionButton from './AdmissionBtn';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Header Section */}
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            <div className="contact-info">
              <span><i className="fas fa-map-marker-alt"></i> Meerut College for Girls Education, Chitwana Sherpur, near Kila Parkshitgarh, Kila-Asifabad road, Meerut</span>
              <span><i className="fas fa-phone"></i> +91-9412523456</span>
            </div>
          </div>
        </div>
      </div>

      <Logo />

      {/* Main Navigation Bar */}
      <nav className="navbar ">
        <div className="container md:flex justify-between">
          <div className="nav-header text-white block md:hidden">
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className={`navbar-collapse ${isMenuOpen ? 'open' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/courses" className="nav-link">Courses</a></li>
              <li className="nav-item"><a href="/events" className="nav-link">Events</a></li>
            </ul>
          </div>

          {/* Search & Admission Button */}
          <div className="nav-right md:flex justify-items-end">
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <button><i className="fas fa-search"></i></button>
            </div>
            <AdmissionButton />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
