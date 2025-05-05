import React from 'react';
import './about.css'; // Import the CSS file for styling

const AboutContent = () => {
  return (
    <div className="about-content">
      {/* Hero Section */}
      <section className="text-center mt-20 text-5xl text-black">

        <h1>About The Institute</h1>

      </section>

      {/* History Section */}
      <section className="probootstrap-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="md:flex">
                <div className="probootstrap-text probootstrap-animate">
                  <div className="text-uppercase probootstrap-uppercase font-bold text-gray-900">History</div>

                  <p className="pt-10">
                    Meerut college for girls Eduction is a leading degree college for girls in Meerut, dedicated to empowering women through quality education. We provide a safe, inclusive, and academically enriching environment, focusing on intellectual growth, leadership, and career readiness.
                    With expert faculty and diverse programs, we prepare young women to excel in academics and beyond. Join us in shaping a future where education empowers women to lead and succeed!
                  </p>

                  <p>
                    <a href="#" className="btn btn-primary text-gray-700 mt-4 sm:mt-6 md:mt-10">
                      Learn More
                    </a>
                  </p>

                </div>
                <div
                  className="probootstrap-image probootstrap-animate mt-20 rounded-xl"
                  style={{ backgroundImage: 'url(IMG-20250302-WA0011.jpg)' }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}

    </div>
  );
};

export default AboutContent;