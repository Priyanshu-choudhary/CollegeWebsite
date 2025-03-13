import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const EventsSection = () => {
  const events = [
    {
      title: 'Holi Celebration',
      description: 'Join us for a vibrant celebration of colors, music, and joy!',
      image: 'WhatsApp Image 2025-03-13 at 12.57.58_c1c9538c.jpg',
    },
    {
      title: 'College Inauguration',
      description: 'The grand opening of our new academic year.',
      image: 'IMG-20250302-WA0009.jpg',
    },
    {
      title: 'Cultural Fest',
      description: 'Experience the diversity of cultures through dance, music, and art.',
      image: 'IMG-20250302-WA0012.jpg',
    },
    {
      title: 'Sports Day',
      description: 'A day full of energy, teamwork, and competitive spirit.',
      image: 'OIP.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-purple-600">Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest events happening at our college. Join us for unforgettable experiences!
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;