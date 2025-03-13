import React from 'react';

const CoursesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Our <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of undergraduate programs designed to shape your future and provide you with the skills
            needed to excel in your career.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* B.A Course Card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" // Replace with your image URL
              alt="B.A Course"
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bachelor of Arts (B.A)</h3>
              <p className="text-gray-600 mb-6">
                The Bachelor of Arts (B.A) is a versatile program that offers a deep understanding of humanities, social
                sciences, and creative arts. It’s perfect for students who want to explore diverse fields and develop
                critical thinking skills.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Duration:</h4>
                <p className="text-gray-600">3 Years (6 Semesters)</p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Subjects:</h4>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li>Hindi</li>
                  <li>English</li>
                  <li>Home Science</li>
                  <li>Education</li>
                  <li>Drawing and Painting</li>
                  <li>Sociology</li>
                  <li>Political Science</li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              <a
                href="https://wa.me/919412523456?text=I'm%20interested%20in%20B.A%20in%20Courses%20in%20in%20in%20your%20in%20College."
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="btn btn-primary "
                data-animate-effect="fadeInLeft"
              >
                Get Admission
              </a>
              </button>
            </div>
          </div>

          {/* B.Com Course Card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" // Replace with your image URL
              alt="B.Com Course"
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bachelor of Commerce (B.Com)</h3>
              <p className="text-gray-600 mb-6">
                The Bachelor of Commerce (B.Com) is a comprehensive program that focuses on commerce, accounting, and
                business management. It prepares students for careers in finance, banking, and corporate sectors.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Duration:</h4>
                <p className="text-gray-600">3 Years (6 Semesters)</p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Key Subjects:</h4>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li>Accounting</li>
                  <li>Business Law</li>
                  <li>Economics</li>
                  <li>Finance</li>
                  <li>Taxation</li>
                  <li>Marketing</li>
                  <li>Management</li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              <a
                href="https://wa.me/919412523456?text=I'm%20interested%20in%20B.Com%20in%20Courses%20in%20in%20in%20your%20in%20College."
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="btn btn-primary "
                data-animate-effect="fadeInLeft"
              >
                Get Admission
              </a>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our courses are designed to provide a perfect blend of theoretical knowledge and practical skills. With
            experienced faculty, state-of-the-art facilities, and a focus on holistic development, we ensure our students
            are ready to face the challenges of the modern world.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
          
           <a
                href="https://wa.me/919412523456"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                className="btn btn-primary "
                data-animate-effect="fadeInLeft"
              >
               Ask our Experts
              </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;