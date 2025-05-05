import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const AdmissionPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasClosedPopup = localStorage.getItem('hasClosedAdmissionPopup');
    if (!hasClosedPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('hasClosedAdmissionPopup', 'true');
    const expiry = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours
    localStorage.setItem('popupExpiry', expiry.toString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
  {/* Background overlay */}
  <div 
    className="fixed inset-0  bg-opacity-30 backdrop-blur-xs"
    onClick={closePopup}
  ></div>

  {/* Popup container with transparent background */}
  <div className="relative bg-transparent max-w-4xl w-full mx-4 z-10">
    {/* Close Button */}
    <button 
      onClick={closePopup}
      className="absolute -top-4 -right-4 bg-black rounded-full p-2  hover:bg-gray-100 transition-colors"
      aria-label="Close popup"
    >
      <FaTimes className="text-2xl text-white" />
    </button>

    {/* Image */}
    <div className="p-0">
      <img 
        src="banner.jpg" 
        alt="Admissions Open 2024-25"
        className="w-full h-auto max-h-[90vh] object-contain rounded-md "
      />
    </div>

 
    
  </div>
</div>

  );
};

export default AdmissionPopup;