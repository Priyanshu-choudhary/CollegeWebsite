import React, { useState, useEffect } from 'react';
import './home.css'; // Import the CSS file for styling

const ImageSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]);

    return (
        <div className="slideshow-container">
            {/* Slideshow Images */}
            <div
                className="slideshow"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button className="prev-button" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next-button" onClick={nextSlide}>
                &#10095;
            </button>

            {/* Dots Indicator */}
            <div className="dots-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlideshow;