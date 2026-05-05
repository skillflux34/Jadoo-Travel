import { useState } from 'react'
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import Home from './components/Main/Home';

import Hero from './components/Main/Hero';

function App() {

  return (
    <>
      <div>

        <div className="relative min-h-screen w-full overflow-x-hidden">
          {/* GLOBAL BACKGROUND SHAPE */}
          <div className="absolute top-0 right-0 z-0 pointer-events-none md:w-[70%] lg:w-[40%]">
            <img 
              src="/bg-hero.png" 
              alt="" 
              className="w-full object-contain" 
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            <Header />
            <Hero />
          </div>
        </div>

        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App;
