import React from 'react';
import './about.css'; // Import the CSS file for styling

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
                  <div className="text-uppercase probootstrap-uppercase">History</div>
                  <h3>Take A Look at How We Begin</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo veniam labore ratione illo
                    vero voluptate a deserunt incidunt odio aliquam commodi blanditiis voluptas error non rerum
                    temporibus optio accusantium!
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary">
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

      {/* School Excellence Section */}
      <section className="probootstrap-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                <img
                  src="img/slider_1.jpg"
                  alt="Free Bootstrap Template by uicookes.com"
                  className="img-responsive"
                />
              </p>
            </div>
            <div className="col-md-6 col-md-push-1">
              <h2>We are NYC based School focused on excellence.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis explicabo veniam labore ratione illo vero
                voluptate a deserunt incidunt odio aliquam commodi blanditiis voluptas error non rerum temporibus optio
                accusantium!
              </p>
              <p>
                Quis explicabo veniam labore ratione illo vero voluptate a deserunt incidunt odio aliquam commodi
                blanditiis voluptas error non rerum temporibus optio accusantium!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="probootstrap-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center section-heading probootstrap-animate">
              <h2>Why Choose Enlight School</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam
                soluta at.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-checkmark"></i>
                </div>
                <div className="text">
                  <h3>Consectetur Adipisicing</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos
                    quibusdam soluta at.
                  </p>
                </div>
              </div>
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-checkmark"></i>
                </div>
                <div className="text">
                  <h3>Aliquid Dolorum Saepe</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos
                    quibusdam soluta at.
                  </p>
                </div>
              </div>
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-checkmark"></i>
                </div>
                <div className="text">
                  <h3>Eveniet Tempora Anisi</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos
                    quibusdam soluta at.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-checkmark"></i>
                </div>
                <div className="text">
                  <h3>Laboriosam Quod Dignissimos</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos
                    quibusdam soluta at.
                  </p>
                </div>
              </div>
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-checkmark"></i>
                </div>
                <div className="text">
                  <h3>Asperiores Maxime Modi</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos
                    quibusdam soluta at.
                  </p>
                </div>
              </div>
              <div className="service left-icon probootstrap-animate">
                <div className="icon">
                  <i className="icon-checkmark"></i>
                </div>
                <div className="text">
                  <h3>Libero Maxime Molestiae</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos
                    quibusdam soluta at.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
    </div>
  );
};

export default AboutContent;