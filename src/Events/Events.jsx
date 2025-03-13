import React from 'react'
import Navbar from '../NavBr/Navbar'
import EventsSection from './EventSection'
import EventGallery from './EventGallery'
import Footer from '../Home/footer';

function Events() {
    const holiImages = [
        'WhatsApp Image 2025-03-13 at 12.57.58_c1c9538c.jpg',
        'WhatsApp Image 2025-03-13 at 12.56.07_231e8f1d.jpg',
        'WhatsApp Image 2025-03-13 at 12.56.08_1660f639.jpg',
        'WhatsApp Image 2025-03-13 at 12.56.08_e4dafff6.jpg',
        // Add more image URLs here
      ];
      const achievements = [
        'WhatsApp Image 2025-03-02 at 16.18.13_a9f32d9f.jpg',
        'WhatsApp Image 2025-03-02 at 16.21.40_166209a0.jpg',
        'WhatsApp Image 2025-03-02 at 16.23.38_354392e4.jpg',
        'WhatsApp Image 2025-03-02 at 16.21.18_545031dd.jpg',
        // Add more image URLs here
      ];
      const SummerTrip = [
        'WhatsApp Image 2025-03-02 at 16.18.42_79eedd5f.jpg',
        'IMG-20250302-WA0014.jpg',
       
        
        // Add more image URLs here
      ];
  return (
    <div>
       <Navbar />
       <EventsSection/>
       <EventGallery  eventName="Achievements " images={achievements}/>
       <EventGallery  eventName="Holi Celebration" images={holiImages}/>
       <EventGallery  eventName="Summer Trip" images={SummerTrip}/>
       <Footer/>
    </div>
  )
}

export default Events
