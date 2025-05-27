import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white ">
      {/* Call to Action */}
      <div className="bg-orange-500 py-8 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Educational Journey?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Admissions open for B.A. and B.Com programs 2024-25</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919412523456?text=I'm%20interested%20in%20admission."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-orange-500 px-6 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
            >
              <span>Apply via WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            {/* <a
              href="/admissions"
              className="border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition"
            >
              Online Application
            </a> */}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* College Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-orange-400 pb-2">Meerut College For Girls Education</h3>
            <p className="mb-4 text-gray-300">
              A premier institution dedicated to women's education and empowerment in Meerut, Uttar Pradesh.
            </p>
            <p className='border-1 rounded-md px-2 py-1 mb-2'> College code:300</p>
            <div className="flex space-x-4 items-center">
              <a href="https://www.facebook.com/share/1DguYKEBwP/?mibextid=wwXIfr" className="text-gray-300 hover:text-white transition">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/meerutcollegeforgirlseducation?igsh=N3ozYXZ3dXJ6ZDBx&utm_source=qr" className="text-gray-300 hover:text-white transition">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="mailto:meerutcollegeforgirlseducation@gmail.com" className="text-gray-300 hover:text-white transition flex items-center">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
            <div className='mt-5'>
              <p>   Ask your query at:</p>
              <a className='underline'>meerutcollegeforgirlseducation@gmail.com</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-orange-400 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-white transition">Courses</a></li>
              {/* <li><a href="/admissions" className="text-gray-300 hover:text-white transition">Admissions</a></li> */}
              {/* <li><a href="/faculty" className="text-gray-300 hover:text-white transition">Faculty</a></li> */}
              {/* <li><a href="/placements" className="text-gray-300 hover:text-white transition">Placements</a></li> */}
              {/* <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</a></li> */}
            </ul>
          </div>

          {/* Courses */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-orange-400 pb-2">Our Courses</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-gray-300 hover:text-white transition">Bachelor of Arts (B.A.)</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-white transition">Bachelor of Commerce (B.Com)</a></li>
              <li><a href="/courses" className="text-gray-300 hover:text-white transition">All courses</a></li>
              {/* <li><a href="/courses/certificate" className="text-gray-300 hover:text-white transition">Certificate Courses</a></li> */}
              {/* <li><a href="/courses/computer" className="text-gray-300 hover:text-white transition">Computer Education</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}


          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b border-orange-400 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Meerut College for Girls Education, Chitwana Sherpur, near Kila Parkshitgarh, Kila-Asifabad road, Meerut, Uttar Pradesh - 250001
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <div>
                  <a href="tel:+919897506153" className="text-gray-300 hover:text-white transition block">+91-9897506153</a>
                  <a href="tel:+919412523456" className="text-gray-300 hover:text-white transition block">+91-9412523456</a>
                </div>
              </li>



              <li className="flex items-center">
                <FaClock className="mr-3" />
                <span className="text-gray-300">Mon-Sat: 9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-3 text-white" />
                <a href="https://www.instagram.com/meerutcollegeforgirlseducation?igsh=N3ozYXZ3dXJ6ZDBx&utm_source=qr"
                  target="_blank" rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li className="flex items-center">
                <FaFacebook className="mr-3 text-white" />
                <a href="https://www.facebook.com/share/1DguYKEBwP/?mibextid=wwXIfr"
                  target="_blank" rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Map Section */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13978.66539542464!2d77.98532398704292!3d28.97517436048545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjguOTc1MTc0MzYsIDc3Ljk4NTMyMzk4!5e0!3m2!1sen!2sin!4v1710123456789"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Copyright and Bottom Links */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Meerut College For Girls Education. All Rights Reserved.
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition">Sitemap</a>
              <a href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition">Disclaimer</a>
            </div> */}
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              Affiliated to Chaudhary Charan Singh University, Meerut | Recognized by UGC under Section 2(f) & 12(B)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;