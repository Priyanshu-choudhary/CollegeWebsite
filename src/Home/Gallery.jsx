import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'clgpic2.jpg',
      alt: 'College Campus Building',
      caption: 'Our state-of-the-art campus with modern facilities'
    },
    {
      id: 2,
      src: 'clgPic1.jpg',
      alt: 'Smart Classroom',
      caption: 'Technology-enabled smart classrooms for interactive learning'
    },
    {
      id: 3,
      src: '5.jpg',
      alt: 'College Library',
      caption: 'Well-stocked library with extensive academic resources'
    },
    {
      id: 4,
      src: 'WhatsApp Image 2025-03-02 at 16.18.13_a9f32d9f.jpg',
      alt: 'Students Group Activity',
      caption: 'Students participating in group discussions and activities'
    },
   
    {
      id: 5,
      src: '3.jpg',
      alt: 'Smart Classroom',
      caption: 'Technology-enabled smart classrooms for interactive learning'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const openImageViewer = (index) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Campus Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our campus through these glimpses of academic life and facilities</p>
          <div className="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => openImageViewer(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Image Viewer */}
        {isViewerOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={() => setIsViewerOpen(false)}
              className="absolute top-6 right-6 text-white text-2xl hover:text-orange-300 transition"
            >
              <FaTimes />
            </button>
            
            <div className="relative max-w-4xl w-full">
              <img 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].alt}
                className="w-full max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                <p>{galleryImages[currentIndex].caption}</p>
                <p className="text-sm text-gray-300 mt-1">
                  {currentIndex + 1} of {galleryImages.length}
                </p>
              </div>
              
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        )}

        {/* Auto Slideshow (Desktop) */}
        <div className="hidden md:block relative rounded-xl overflow-hidden shadow-xl">
          <div className="relative h-96">
            {galleryImages.map((image, index) => (
              <div 
                key={`slide-${image.id}`}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;