import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from 'react-icons/md';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);


  return (
    <div className="bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="bg-orange-500 text-white text-xs sm:text-sm py-1.5 px-4 border-b border-orange-500">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
          {/* Left Info - Address & Badges */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1.5 text-white" />
            <span className="truncate max-w-[180px] xs:max-w-[220px] sm:max-w-none">
              Meerut College for Girls Education, Chitwana Sherpur, Kila-Asifabad Road, Meerut
            </span>

            {/* Accreditation Badges - Only visible on larger screens */}
            <div className="hidden sm:flex items-center ml-3 gap-2">
              <div className="bg-white/90 px-2 py-0.5 rounded-sm border border-orange-300 shadow-xs">
              <span className="text-black font-bold text-xs">Affiliated by Chaudhary Charan Singh University </span>
              </div>
              <div className="bg-white/90 px-2 py-0.5 rounded-sm border border-orange-300 shadow-xs">
                
                <span className="text-black font-bold text-xs">NAAC A++</span>
              </div>
            </div>
          </div>

          {/* Right Contact Info */}
          <div className="flex items-center">
            <a href="tel:+919412523456" className="hover:underline flex items-center">
              <FaPhone className="transform scale-x-[-1] mr-1.5 text-white" /> {/* Mirrored phone icon */}
              +91-9412523456
            </a>
            <span className="mx-2 hidden sm:inline">|</span>
            <a href="tel:+919897506153" className="hover:underline hidden sm:inline">
              +91-9897506153
            </a>
          </div>
        </div>

        {/* Accreditation Badges - For mobile */}
        <div className="sm:hidden flex justify-center mt-1 gap-2">
          <div className="bg-white/90 px-2 py-0.5 rounded-sm border border-orange-300 shadow-xs">
            <span className="text-black font-bold text-xs">CCSU Affiliated</span>
          </div>
          <div className="bg-white/90 px-2 py-0.5 rounded-sm border border-orange-300 shadow-xs">

            <span className="text-black font-bold text-xs">NAAC A++</span>
          </div>
        </div>
      </div>


      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and College Name */}
          <div className="flex items-center">
            <img className="mr-2" src="logoCLG.jpg" alt="logo" style={{ height: 35 }} />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Meerut College</h1>
              <p className="text-xs text-gray-600">For Girls Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a href="/" className="text-gray-800 hover:text-orange-500 font-medium py-2 border-b-2 border-transparent hover:border-orange-500 transition">
                Home
              </a>
              <a href="/about" className="text-gray-800 hover:text-orange-500 font-medium py-2 border-b-2 border-transparent hover:border-orange-500 transition">
                About
              </a>
              <div className="relative group">
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="flex items-center text-gray-800 hover:text-orange-500 font-medium py-2 px-3 rounded-md hover:bg-orange-50 transition-colors duration-200"
                  aria-expanded={isCoursesOpen}
                  aria-haspopup="true"
                >
                  Courses
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isCoursesOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-100 ${isCoursesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    } transition-all duration-200 ease-out`}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <div className="py-1">
                    <a
                      href="/courses"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors flex items-center"
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      <FaGraduationCap className="mr-2 text-orange-400" />
                      <div>
                        <div className="font-medium">B.A. Programs</div>
                        <div className="text-xs text-gray-500 mt-1">Arts and Humanities</div>
                      </div>
                    </a>
                    <a
                      href="/courses"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors flex items-center"
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      <MdOutlineLibraryBooks className="mr-2 text-orange-400 text-lg" />
                      <div>
                        <div className="font-medium">B.Com Programs</div>
                        <div className="text-xs text-gray-500 mt-1">Commerce and Business</div>
                      </div>
                    </a>
                    <a
                      href="/courses"
                      className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors flex items-center"
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      <FaAward className="mr-2 text-orange-400" />
                      <div>
                        <div className="font-medium">Certificate Courses</div>
                        <div className="text-xs text-gray-500 mt-1">Skill Development</div>
                      </div>
                    </a>
                  </div>

                  <div className="border-t border-gray-100 px-4 py-2 bg-gray-50 rounded-b-lg">
                    <a
                      href="/courses"
                      className="text-sm text-orange-500 hover:text-orange-500 font-medium inline-flex items-center"
                      onClick={() => setIsCoursesOpen(false)}
                    >
                      View all courses
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>



              <a href="/contact" className="text-gray-800 hover:text-orange-500 font-medium py-2 border-b-2 border-transparent hover:border-orange-500 transition">
                Contact
              </a>
            </div>

            {/* Search and Admission Button */}
            <div className="flex items-center ml-6 space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-600 hover:text-orange-500 transition"
                aria-label="Search"
              >
                <FaSearch className="text-lg" />
              </button>
              <a
                href="/admissions"
                className="bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition"
              >
                Admissions
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600 hover:text-orange-500 transition"
              aria-label="Search"
            >
              <FaSearch className="text-lg" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-orange-500 transition"
              aria-label="Menu"
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="absolute right-3 top-2.5 text-gray-500">
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-2">
            <a
              href="/"
              className="block px-4 py-3 text-gray-800 hover:bg-orange-50 font-medium border-l-4 border-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-4 py-3 text-gray-800 hover:bg-orange-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="px-4 py-3">
              <div className="font-medium text-gray-800 mb-2">Courses</div>
              <div className="pl-4 space-y-2">
                <a
                  href="/courses"
                  className="block py-2 text-gray-700 hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  B.A. Programs
                </a>
                <a
                  href="/courses"
                  className="block py-2 text-gray-700 hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  B.Com Programs
                </a>
                <a
                  href="/courses"
                  className="block py-2 text-gray-700 hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Certificate Courses
                </a>
              </div>
            </div>


            <a
              href="/Event"
              className="block px-4 py-3 text-gray-800 hover:bg-orange-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Event
            </a>
            <div className="px-4 py-3">
              <a
                href="/admissions"
                className="block w-full text-center bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Admissions
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Search (appears below nav when activated) */}
      {searchOpen && (
        <div className="hidden md:block bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search courses, faculty, news..."
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 pl-12"
              />
              <button className="absolute left-5 top-3.5 text-gray-500">
                <FaSearch className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;