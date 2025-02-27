import React from 'react';
import './about.css'; // Import the CSS file for styling
import Stats from './Stats';

const AboutContent = () => {
  return (
    <div className="about-content">
      {/* Hero Section */}
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate">
              <h1>About The School</h1>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="probootstrap-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="probootstrap-flex-block">
                <div className="probootstrap-text probootstrap-animate">
                  <div className="text-uppercase probootstrap-uppercase font-bold text-gray-900">History</div>

                  <p className='pt-10'>
                    Meerut college for girls Eduction is a leading degree college for girls in Meerut, dedicated to empowering women through quality education. We provide a safe, inclusive, and academically enriching environment, focusing on intellectual growth, leadership, and career readiness.
                    With expert faculty and diverse programs, we prepare young women to excel in academics and beyond. Join us in shaping a future where education empowers women to lead and succeed!
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary text-gray-700 mt-10">
                      Learn More
                    </a>
                  </p>
                </div>
                <div
                  className="probootstrap-image probootstrap-animate"
                  style={{ backgroundImage: 'url(1.jpg)' }}
                >
                  <a href="https://vimeo.com/45830194" className="btn-video popup-vimeo">
                    <i className="icon-play3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />

      {/* Call to Action Section */}
      
    </div>
  );
};

export default AboutContent;