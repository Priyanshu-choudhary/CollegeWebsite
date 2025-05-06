import React from 'react';
import Navbar from '../NavBr/Navbar';
import Footer from '../Home/footer';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaUserGraduate, FaCalendarAlt, FaClipboardList, FaRupeeSign } from 'react-icons/fa';
import { MdOutlineLibraryBooks, MdOutlineSchool, MdOutlineWorkspaces } from 'react-icons/md';

const CoursesPage = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative bg-orange-500 text-white py-20">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Academic Programs</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering women through quality education in arts and commerce
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 text-sm">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-orange-500 hover:text-orange-500">Home</a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <span className="ml-1 text-gray-500 md:ml-2">Courses</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Undergraduate Programs</h2> */}
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
           <strong> Meerut College for Girls Education</strong> offers comprehensive undergraduate programs designed to provide
            strong academic foundations while developing critical thinking and professional skills.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* B.A Program */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
            <div className="relative h-64 overflow-hidden">
              <img
                src="books.webp"
                alt="B.A Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-400/60 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Bachelor of Arts (B.A)</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Our B.A program offers a broad liberal arts education with specializations in humanities and social sciences.
                The curriculum is designed to develop critical thinking, communication skills, and cultural awareness.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <FaGraduationCap className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Degree</h4>
                    <p className="text-gray-600 text-sm">Bachelor of Arts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCalendarAlt className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Duration</h4>
                    <p className="text-gray-600 text-sm">3 Years (6 Semesters)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MdOutlineSchool className="text-orange-500 mt-1 mr-3 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Eligibility</h4>
                    <p className="text-gray-600 text-sm">10+2 in any stream</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaRupeeSign className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Fees</h4>
                    <p className="text-gray-600 text-sm">₹7000/year</p>
                  </div>
                </div>
              </div>

             
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Core Subjects:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Home Science</span>
                  </div>
                 
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>English Literature</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Hindi Literature</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Political Science</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Education</span>
                  </div>
                 
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Sociology</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Drawing and Painting</span>
                  </div>
                  
                  
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Program Highlights:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Interdisciplinary curriculum with flexible subject combinations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Regular seminars and workshops with industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Focus on research and analytical skills development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Value-added certificate courses in communication and digital skills</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* <a 
                  href="/ba-program-details" 
                  className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium text-center transition"
                >
                  View Details
                </a> */}
                <a
                  href="https://wa.me/919412523456?text=I'm%20interested%20in%20B.A%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium text-center transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          {/* B.Com Program */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="B.Com Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-400/60 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Bachelor of Commerce (B.Com)</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Our B.Com program provides comprehensive knowledge in commerce, accounting, and business management.
                The curriculum blends theoretical concepts with practical applications to prepare students for corporate careers.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <FaGraduationCap className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Degree</h4>
                    <p className="text-gray-600 text-sm">Bachelor of Commerce</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCalendarAlt className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Duration</h4>
                    <p className="text-gray-600 text-sm">3 Years (6 Semesters)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MdOutlineSchool className="text-orange-500 mt-1 mr-3 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Eligibility</h4>
                    <p className="text-gray-600 text-sm">10+2 with Commerce</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaRupeeSign className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Fees</h4>
                    <p className="text-gray-600 text-sm">₹7000/year</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Core Subjects:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Financial Accounting</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Business Economics</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Corporate Law</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Cost Accounting</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Income Tax</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Business Statistics</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Banking & Finance</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Marketing Management</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Accounting and Auditing roles in firms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Banking and financial services careers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Corporate sector jobs in finance and marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span>Preparation for CA, CS, and CMA certifications</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* <a 
                  href="/bcom-program-details" 
                  className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium text-center transition"
                >
                  View Details
                </a> */}
                <a
                  href="https://wa.me/919412523456?text=I'm%20interested%20in%20B.Com%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium text-center transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
            <div className="relative h-64 overflow-hidden">
              <img
                src="MA.png"
                alt="B.A Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-400/60 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Master of Arts (M.A)</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Our M.A program fosters critical thinking and in-depth understanding of humanities and social sciences.
                With specializations in subjects like English, Economics, and History, students are prepared for careers in education, research, and administration.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <FaGraduationCap className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Degree</h4>
                    <p className="text-gray-600 text-sm">Master of Arts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCalendarAlt className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Duration</h4>
                    <p className="text-gray-600 text-sm">2 Years (4 Semesters)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MdOutlineSchool className="text-orange-500 mt-1 mr-3 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Eligibility</h4>
                    <p className="text-gray-600 text-sm">Bachelor’s degree in any discipline</p>
                  </div>
                </div>

              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Core Subjects:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Literary Theory</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Modern Indian History</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Development Economics</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Research Methodology</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Political Philosophy</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>English Literature</span></div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Teaching and academic roles</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Government and administrative services</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Research and policy analysis</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Media, publishing, and content writing</span></li>
                </ul>
              </div>


              <div className="flex flex-col sm:flex-row gap-3">
                {/* <a 
                  href="/ba-program-details" 
                  className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium text-center transition"
                >
                  View Details
                </a> */}
                <a
                  href="https://wa.me/919412523456?text=I'm%20interested%20in%20B.A%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium text-center transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          {/* M.A Program */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
            <div className="relative h-64 overflow-hidden">
              <img
                src="MCA.png"
                alt="B.Com Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-400/60 to-transparent flex items-end p-6">
                <h3 className="text-3xl font-bold text-white">Master of Commerce (M.Com)</h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                The M.Com program provides advanced knowledge in commerce, finance, accounting, and economics. It prepares students for roles in corporate finance, banking, taxation, and academic research with a strong theoretical and practical foundation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <FaGraduationCap className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Degree</h4>
                    <p className="text-gray-600 text-sm">Master of Commerce</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaCalendarAlt className="text-orange-500 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Duration</h4>
                    <p className="text-gray-600 text-sm">2 Years (4 Semesters)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MdOutlineSchool className="text-orange-500 mt-1 mr-3 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Eligibility</h4>
                    <p className="text-gray-600 text-sm">B.Com or equivalent degree</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Core Subjects:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Advanced Financial Accounting</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Corporate Law & Governance</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Managerial Economics</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Business Statistics</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Taxation Laws and Practices</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Financial Management</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>International Business</span></div>
                  <div className="flex items-start"><span className="text-orange-500 mr-2">•</span><span>Research Methodology</span></div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Career Opportunities:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Chartered Accountant (with further qualifications)</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Financial Analyst or Consultant</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Tax Consultant</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Banking & Insurance Sector Jobs</span></li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Academician / Lecturer</span></li>
                </ul>
              </div>


              <div className="flex flex-col sm:flex-row gap-3">
                {/* <a 
                  href="/bcom-program-details" 
                  className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium text-center transition"
                >
                  View Details
                </a> */}
                <a
                  href="https://wa.me/919412523456?text=I'm%20interested%20in%20B.Com%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium text-center transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* M.A programe */}



        {/* Additional Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Learning Opportunities</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Certificate Programs */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MdOutlineLibraryBooks className="text-orange-500 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Certificate Programs</h4>
              <p className="text-gray-600 mb-4">
                Enhance your skills with our short-term certificate courses designed to complement your degree.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Digital Marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Financial Accounting with Tally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Communication Skills</span>
                </li>
              </ul>
            </div>

            {/* Internship Support */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MdOutlineWorkspaces className="text-orange-500 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Internship Support</h4>
              <p className="text-gray-600 mb-4">
                We facilitate internships with local businesses and organizations to provide practical experience.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Accounting firms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Educational institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>NGOs and social organizations</span>
                </li>
              </ul>
            </div>

            {/* Placement Assistance */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaUserGraduate className="text-orange-500 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Placement Assistance</h4>
              <p className="text-gray-600 mb-4">
                Our dedicated placement cell helps students prepare for and secure employment after graduation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Resume building workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Interview preparation sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Campus recruitment drives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h3>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-gray-800 mb-2">What is the admission process for B.A/B.Com programs?</h4>
              <p className="text-gray-600">
                Admissions are based on merit in the qualifying examination. The process involves online application form submission,
                document verification, and fee payment. Please check our admissions page for detailed information.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Are there any scholarships available?</h4>
              <p className="text-gray-600">
                Yes, we offer merit-based scholarships and financial aid for deserving students. There are also government
                scholarships available for eligible candidates.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h4 className="font-semibold text-gray-800 mb-2">Can I pursue both B.A and B.Com simultaneously?</h4>
              <p className="text-gray-600">
                No, the university regulations do not permit simultaneous enrollment in two degree programs. However, you
                can pursue certificate courses alongside your degree.
              </p>
            </div>

            <div className="pb-2">
              <h4 className="font-semibold text-gray-800 mb-2">What are the class timings?</h4>
              <p className="text-gray-600">
                Regular classes are conducted from 9:30 AM to 3:30 PM, Monday to Saturday. There may be variations for
                practical sessions or special classes.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Still have questions about our programs?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Our admission counselors are available to guide you through the program selection and admission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919412523456"
              className="bg-orange-500 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Call Admission Office
            </a>
            <a
              href="/contact"
              className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition"
            >
              Visit Campus
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursesPage;