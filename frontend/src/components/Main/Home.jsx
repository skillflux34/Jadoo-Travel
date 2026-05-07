import React from 'react'
// import Hero from './Hero';
import Services from './Services';
import Destinations from './Destinations';
import Trips from './Trips';
import Testimonials from './Testimonials';
import Partners from './Partners';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div className='container mx-auto'>
        {/* <Hero /> */}
        <Services />
        <Destinations />
        <Trips />
        <Testimonials />
        <Partners />
        <Newsletter />
    </div>
  )
}

export default Home;

