import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbr from "../NavBr/Navbar";
import Footer from "./footer";
import Testimonials from "./Testimonials";
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaUserGraduate, FaAward, FaUniversity } from 'react-icons/fa';
import { MdSecurity, MdAttachMoney, MdLibraryBooks } from 'react-icons/md';
import NewsSection from './News';
import Gallery from './Gallery';

export default function Home() {
    // Updated image gallery with more professional college images
    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
    ];
    const slides = [
        {
            image: "/images/slide1.jpg",
            heading: "Empowering Women Through Education",
            subtext: "A premier degree college in Meerut offering B.A. and B.Com programs in a safe, nurturing environment."
        },
        {
            image: "/images/slide2.jpg",
            heading: "Shaping Future Leaders",
            subtext: "With experienced faculty and vibrant campus life, we prepare students for academic and professional success."
        },
        {
            image: "/images/slide3.jpg",
            heading: "Excellence in Academics and Values",
            subtext: "Meerut College for Girls combines rigorous academics with character-building for holistic development."
        },
        {
            image: "/images/slide4.jpg",
            heading: "Affiliated with CCSU & NAAC A++ Accredited",
            subtext: "Our college is recognized for quality education and academic excellence through top-tier accreditations."
        },
        {
            image: "/images/slide5.jpg",
            heading: "Modern Infrastructure & Digital Classrooms",
            subtext: "Smart classrooms, digital labs, and a well-stocked library foster an engaging learning experience."
        },
        {
            image: "/images/slide6.jpg",
            heading: "Cultural Activities & Holistic Development",
            subtext: "From debates to dance — we nurture talent, creativity, and confidence beyond academics."
        }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const stats = [
        { id: 1, name: 'Students Enrolled', value: '2500+' },
        
        { id: 3, name: 'Courses Offered', value: '5+' },
        { id: 4, name: 'Batch Size', value: '350' },
         { id: 5, name: 'Placement Rate', value: '90%' },
        { id: 6, name: 'Years of Excellence', value: '10+' },
    ];

    const features = [
        {
            name: 'Quality Education',
            description: 'Curriculum designed to empower students with knowledge and real-world skills.',
            icon: FaBook,
        },
        {
            name: 'Safe Campus',
            description: '24/7 security, CCTV surveillance, and a safe learning environment.',
            icon: MdSecurity,
        },
        {
            name: 'Scholarships',
            description: 'Merit-based and need-based scholarships available.',
            icon: MdAttachMoney,
        },
        {
            name: 'Placement Support',
            description: 'Dedicated placement cell with industry connections.',
            icon: FaUserGraduate,
        },
    ];

    const courses = [
        {
            name: 'Bachelor of Arts (B.A.)',
            duration: '3 Years',
            eligibility: '10+2 in any stream',
            description: 'Comprehensive arts program with specializations in History, Political Science, Economics, and English Literature.',
            icon: FaGraduationCap,
        },
        {
            name: 'Bachelor of Commerce (B.Com)',
            duration: '3 Years',
            eligibility: '10+2 with Commerce',
            description: 'Professional commerce program covering Accounting, Business Studies, Economics, and Financial Management.',
            icon: MdLibraryBooks,
        },
    ];

    const people = [
        {
            id: 1,
            name: "Dr. Rahul Tyagi",
            post: "Secretary, Meerut College For Girls Education",
            msg: "At our college, we believe education is the key to empowerment. Our mission is to provide young women with knowledge, confidence, and skills to shape their future in a nurturing environment where every student can thrive.",
            img: "principal.jpg",
        },
    ];

    return (
        <div className="font-sans bg-gray-50">
            <Navbr />

            {/* Hero Banner with Image Slider */}
            <div className="relative h-screen max-h-[80vh] overflow-hidden">


                <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {slides[currentIndex].heading}
                        </h1>
                        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                            {slides[currentIndex].subtext}
                        </p>
                        <div className="flex gap-4 justify-center">
                            <a
                                href="https://wa.me/919897506153?text=I%20am%20interested%20in%20taking%20admission%20in%20your%20college"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-orange-500 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-medium text-lg transition"
                            >
                                Apply Now
                            </a>

                            <Link to="/courses" className="bg-white hover:bg-gray-100 text-orange-500 px-6 py-3 rounded-lg font-medium text-lg transition">
                                Explore Courses
                            </Link>
                        </div>
                    </div>
                </div>


                {/* Slideshow */}
                <div className="relative h-full w-full">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        ></div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-20"
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-20"
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-orange-500 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                        {stats.map((stat) => (
                            <div key={stat.id} className="p-4">
                                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-sm md:text-base">{stat.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <NewsSection />
            {/* About College */}
            <section id='about' className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Meerut College For Girls Education</h2>
                        <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <img
                                src="clgpic2.jpg"
                                alt="College Building"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Legacy of Excellence</h3>
                            <p className="text-gray-600 mb-4">
                                Established with a vision to empower women through education, Meerut College For Girls Education has been a beacon of academic excellence in the region for over a decade.
                            </p>
                            <p className="text-gray-600 mb-6">
                                We provide a safe, inclusive, and intellectually stimulating environment where young women can explore their potential, develop critical thinking skills, and prepare for successful careers and meaningful lives.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-orange-500 font-medium">
                                Learn More About Us
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Courses */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Quality education programs designed to empower our students</p>
                        <div className="w-20 h-1 bg-orange-400 mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {courses.map((course, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <div className="flex items-start mb-4">
                                    <div className="bg-orange-100 p-3 rounded-full mr-4">
                                        <course.icon className="text-orange-500 text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{course.name}</h3>
                                        <div className="flex gap-4 mt-1">
                                            <span className="text-sm text-gray-600"><strong>Duration:</strong> {course.duration}</span>
                                            <span className="text-sm text-gray-600"><strong>Eligibility:</strong> {course.eligibility}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                                <Link to={`/courses/${course.name.toLowerCase().replace(' ', '-')}`} className="text-orange-500 font-medium inline-flex items-center">
                                    Course Details
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/courses" className="bg-orange-500 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium inline-block transition">
                            View All Courses
                        </Link>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Our College?</h2>
                        <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition">
                                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="text-orange-500 text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.name}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Gallery />
            {/* Testimonials */}
            <section className="py-16 bg-orange-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What People Say About Us</h2>
                        <div className="w-20 h-1 bg-orange-400 mx-auto"></div>
                    </div>

                    <Testimonials testimonials={people} />
                </div>
            </section>

            {/* Call to Action
            <section className="py-16 bg-orange-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Join our community of empowered women and take the first step towards a brighter future.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/admissions" className="bg-white hover:bg-gray-100 text-orange-500 px-8 py-3 rounded-lg font-medium text-lg transition">
                            Apply Now
                        </Link>
                        <Link to="/contact" className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-lg transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* Affiliations/Recognitions */}
          
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Affiliations & Recognitions</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
                            <strong>Meerut College for Girls Education</strong> is proudly affiliated with
                            <span className="text-orange-600 font-semibold"> Chaudhary Charan Singh University (CCSU)</span>,
                            which holds the prestigious <span className="text-green-700 font-semibold">NAAC A++</span> accreditation -
                            the highest grade awarded by the National Assessment and Accreditation Council.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* CCSU Affiliation Card */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                            <div className="bg-orange-50 p-4 rounded-full mb-4">
                                <img src="CCSU-Logo.jpg" alt="CCSU Logo" className="w-20 h-20 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Affiliated To</h3>
                            <p className="text-orange-600 font-semibold text-center">Chaudhary Charan Singh University</p>
                            <p className="text-gray-500 text-sm mt-1">(A NAAC A++ Accredited University)</p>
                            <div className="mt-4 text-sm text-gray-600">
                                Our college follows the curriculum and standards set by CCSU, Meerut
                            </div>
                        </div>

                        {/* NAAC Accreditation Card */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                            <div className="bg-green-50 p-4 rounded-full mb-4">
                                <img src="Naac.jpg" alt="NAAC Logo" className="w-20 h-20 object-contain" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">University Accreditation</h3>
                            <p className="text-green-700 font-semibold text-center">NAAC A++ Grade</p>
                            <p className="text-gray-500 text-sm mt-1">(Highest Accreditation in India)</p>
                            <div className="mt-4 text-sm text-gray-600">
                                Our affiliating university holds this prestigious accreditation
                            </div>
                        </div>
                    </div>
                    {/* Clarification Note */}
                    <div className="mt-12 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-4 max-w-3xl mx-auto">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-orange-700">
                                    <strong>Note:</strong> The NAAC A++ accreditation belongs to our affiliating university (CCSU).
                                    As an affiliated college, we adhere to their quality standards and academic framework.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<section id='contact'>
            <Footer />
            </section>
        </div>
    );
}