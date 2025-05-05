import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="bg-indigo-900 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <FaMapMarkerAlt className="mr-2" />
            <div className="w-full  text-sm text-center py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 font-medium">
              <span>Meerut College for Girls Education, Chitwana Sherpur, Meerut</span>
             <div className='bg-yellow-100 rounded-2xl px-3 py-0.5'>
             <span className="text-red-500 font-semibold">Affiliated by CCSU</span>
             <span className="text-red-500 font-semibold mx-2">NAAC A++</span>
             </div>
            </div>

          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <a href="tel:+919412523456" className="hover:underline">+91-9412523456</a>
            <span className="mx-2 hidden md:inline">|</span>
            <a href="tel:+919897506153" className="hover:underline hidden md:inline">+91-9897506153</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and College Name */}
          <div className="flex items-center">
          <img className="mr-2" src="logoCLG.jpg" alt="logo" style={{height:35}} />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Meerut College</h1>
              <p className="text-xs text-gray-600">For Girls Education</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <a href="/" className="text-gray-800 hover:text-indigo-700 font-medium py-2 border-b-2 border-transparent hover:border-indigo-700 transition">
                Home
              </a>
              <a href="/about" className="text-gray-800 hover:text-indigo-700 font-medium py-2 border-b-2 border-transparent hover:border-indigo-700 transition">
                About
              </a>
              <div className="relative group">
                <button className="text-gray-800 hover:text-indigo-700 font-medium py-2 border-b-2 border-transparent hover:border-indigo-700 transition flex items-center">
                  Courses
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <a href="/courses/ba" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">B.A. Programs</a>
                  <a href="/courses/bcom" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">B.Com Programs</a>
                  <a href="/courses/certificate" className="block px-4 py-2 text-gray-800 hover:bg-indigo-50">Certificate Courses</a>
                </div>
              </div>
              <a href="/faculty" className="text-gray-800 hover:text-indigo-700 font-medium py-2 border-b-2 border-transparent hover:border-indigo-700 transition">
                Faculty
              </a>
              <a href="/placements" className="text-gray-800 hover:text-indigo-700 font-medium py-2 border-b-2 border-transparent hover:border-indigo-700 transition">
                Placements
              </a>
              <a href="/contact" className="text-gray-800 hover:text-indigo-700 font-medium py-2 border-b-2 border-transparent hover:border-indigo-700 transition">
                Contact
              </a>
            </div>

            {/* Search and Admission Button */}
            <div className="flex items-center ml-6 space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-gray-600 hover:text-indigo-700 transition"
                aria-label="Search"
              >
                <FaSearch className="text-lg" />
              </button>
              <a
                href="/admissions"
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-md font-medium transition"
              >
                Admissions
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600 hover:text-indigo-700 transition"
              aria-label="Search"
            >
              <FaSearch className="text-lg" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-indigo-700 transition"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="block px-4 py-3 text-gray-800 hover:bg-indigo-50 font-medium border-l-4 border-indigo-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-4 py-3 text-gray-800 hover:bg-indigo-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="px-4 py-3">
              <div className="font-medium text-gray-800 mb-2">Courses</div>
              <div className="pl-4 space-y-2">
                <a
                  href="/courses/ba"
                  className="block py-2 text-gray-700 hover:text-indigo-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  B.A. Programs
                </a>
                <a
                  href="/courses/bcom"
                  className="block py-2 text-gray-700 hover:text-indigo-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  B.Com Programs
                </a>
                <a
                  href="/courses/certificate"
                  className="block py-2 text-gray-700 hover:text-indigo-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Certificate Courses
                </a>
              </div>
            </div>
            <a
              href="/faculty"
              className="block px-4 py-3 text-gray-800 hover:bg-indigo-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Faculty
            </a>
            <a
              href="/placements"
              className="block px-4 py-3 text-gray-800 hover:bg-indigo-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Placements
            </a>
            <a
              href="/contact"
              className="block px-4 py-3 text-gray-800 hover:bg-indigo-50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="px-4 py-3">
              <a
                href="/admissions"
                className="block w-full text-center bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-md font-medium transition"
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
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 pl-12"
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