import React from 'react';

const Footer = () => {
  return (
    <div>
          <section className="probootstrap-cta">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="probootstrap-animate" data-animate-effect="fadeInRight">
                                Get your admission now!
                            </h2>
                            <a
                                href="#"
                                role="button"
                                className="btn btn-primary btn-lg btn-ghost probootstrap-animate"
                                data-animate-effect="fadeInLeft"
                            >
                                Enroll
                            </a>
                        </div>
                    </div>
                </div>
            </section>

    <footer className="footer">
      
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Our college is dedicated to providing quality education and fostering innovation. Join us to shape your future.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> 123 meerut, India</li>
            <li><i className="fas fa-phone"></i> +999999999</li>
            <li><i className="fas fa-envelope"></i> info@college.edu</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}Meerut college for girls Education . All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;