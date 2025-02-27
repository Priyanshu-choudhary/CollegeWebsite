import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import Logo from './logo';
import AdmissionButton from './AdmissionBtn';

function Navbar() {
  return (
    <div>
      {/* Top Header Section */}
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            <div className="contact-info ">
              <span><i className="fas fa-map-marker-alt"></i> 123 meerut, India</span>
              <span><i className="fas fa-phone"></i> +9999999999</span>
              <span><i className="fas fa-envelope"></i> info@college.edu</span>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <Logo />
      {/* Main Navigation Bar */}
      <nav className="navbar">
        <div className="container">

          <div style={{ display: "flex", justifyContent: "space-between" }}>

            <div className="navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="/courses" className="nav-link">Courses</a></li>
                <li className="nav-item"><a href="/faculty" className="nav-link">Faculty</a></li>
                <li className="nav-item"><a href="/events" className="nav-link">Events</a></li>

                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle">More <i className="fas fa-chevron-down"></i></a>
                  <ul className="dropdown-menu">
                    <li><a href="/about" className="dropdown-item">About Us</a></li>
                    <li><a href="/gallery" className="dropdown-item">Gallery</a></li>
                    <li><a href="/news" className="dropdown-item">News</a></li>
                    <li><a href="/contact" className="dropdown-item">Contact</a></li>
                  </ul>
                </li>

              </ul>
            </div>
            <div style={{display:"flex",gap:0}}>
              <div className="search-box">
                <input type="text" placeholder="Search..." />
                <button><i className="fas fa-search"></i></button>

              </div>
              <AdmissionButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;