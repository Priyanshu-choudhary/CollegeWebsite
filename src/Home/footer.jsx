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
                href="https://wa.me/919412523456?text=I'm%20interested%20in%20admission."
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="btn btn-primary btn-lg btn-ghost probootstrap-animate"
                data-animate-effect="fadeInLeft"
              >
                Get Admission
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
              <li><i className="fas fa-map-marker-alt"></i> Meerut College for Girls Education, Chitwana Sherpur, near Kila Parkshitgarh, Kila-Asifabad road, Meerut</li>
              <li><i className="fas fa-phone"></i> +91-9897506153</li>
              <li><i className="fas fa-phone"></i> +91-9412523456</li>
              <li><i className="fas fa-envelope"></i> rahual.tyagidr@gmail.com</li>
            </ul>
          </div>

          {/* Map Section (Replacing Social Media) */}
          <div className="footer-section">
            <h3>Our Location</h3>
            <iframe
              title="College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13978.66539542464!2d77.98532398704292!3d28.97517436048545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjguOTc1MTc0MzYsIDc3Ljk4NTMyMzk4!5e0!3m2!1sen!2sin!4v1710123456789"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Meerut College for Girls Education. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
