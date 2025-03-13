import React, { useState } from 'react';

const EventGallery = ({ eventName, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {eventName} <span className="text-purple-600">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Relive the memories of {eventName} through these amazing moments captured in our gallery.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Event ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full-Size Image */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={closeModal}>
            <div className="relative max-w-4xl w-full">
              <img
                src={selectedImage}
                alt="Full Size"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventGallery;