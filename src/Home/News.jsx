import React from 'react';
import { FaNewspaper, FaCalendarAlt, FaRegBell } from 'react-icons/fa';

const NewsSection = () => {
  const announcements = [
    {
      id: 1,
      title: 'Admissions Open for B.A. and B.Com Programs 2025-26',
      date: '1 May 2025',
      excerpt: 'Online applications are now being accepted for the academic year 2025-26.',
      category: 'Admission',
      link: '/admissions'
    },
    {
      id: 2,
      title: 'College to Host National Seminar on Women Empowerment',
      date: '5 Jan 2025',
      excerpt: 'Distinguished speakers from across India will discuss contemporary issues in women education and empowerment.',
      category: 'Event',
      link: '/events/national-seminar'
    },
    
    {
      id:3,
      title: 'New Computer Lab Inauguration',
      date: '20 May 2024',
      excerpt: 'College has established a new computer lab with 50 latest systems and high-speed internet.',
      category: 'Facility',
      link: '/facilities'
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: 'Our Students Win Debate Competition at University Level',
      date: '10 June 2024',
      excerpt: 'Team from our college secured first position in the inter-college debate competition held at CCSU.',
      link: '/news/debate-competition'
    },
   
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">News & Announcements</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="md:col-span-2 bg-indigo-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <FaRegBell className="text-indigo-700 text-2xl mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Announcements</h3>
            </div>
            
            <div className="space-y-6">
              {announcements.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-xs hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <FaCalendarAlt className="mr-1" /> {item.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-3">{item.excerpt}</p>
                  <a 
                    href={item.link} 
                    className="text-indigo-700 font-medium inline-flex items-center text-sm hover:underline"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <FaNewspaper className="text-indigo-700 text-2xl mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Latest News</h3>
            </div>
            
            <div className="space-y-5">
              {latestNews.map((item) => (
                <div key={item.id} className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                  <span className="text-gray-500 text-sm flex items-center mb-1">
                    <FaCalendarAlt className="mr-1" /> {item.date}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-700 transition">
                    <a href={item.link}>{item.title}</a>
                  </h4>
                  <p className="text-gray-600 text-sm">{item.excerpt}</p>
                </div>
              ))}
            </div>

            {/* Ticker (Indian Style) */}
            <div className="mt-8 bg-white p-4 rounded-lg shadow-xs border-l-4 border-indigo-600">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">LATEST</span>
                Notice: Admissions Open for B.A. and B.Com Programs 2025-26
              </h4>
              <div className="text-sm text-gray-600">
                {/* <p>College will remain closed for summer vacation. Office will function with limited staff.</p> */}
                {/* <a href="/notice/summer-vacation" className="text-indigo-700 font-medium inline-flex items-center text-xs mt-2 hover:underline">
                  View Notice
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a 
            href="/news" 
            className="inline-flex items-center bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            View All News & Announcements
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;