import React from 'react'
import Navbar from '../NavBr/Navbar'
import CoursesSection from './CoursesSection'
import Footer from '../Home/footer'

function Courses() {
  return (
    <div>
      <Navbar />
      <div className='bg-blue-500 min-h-40' >
        <div className='md:flex justify-evenly text-center text-white'>
          <p className='text-7xl pt-4 pb-4'>B.A</p>
          <div className='bg-white w-0.5 min-h-40 hidden md:block'></div>
          <div class="block md:hidden bg-white min-w-full min-h-0.5  ">

          </div>
          <p className='text-7xl pt-4'>B.Com</p>
        </div>
        <CoursesSection />
      </div>
      <Footer />
    </div>
  )
}

export default Courses
