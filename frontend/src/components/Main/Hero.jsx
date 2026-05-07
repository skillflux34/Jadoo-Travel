import React from 'react'
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto mt-6 md:mt-12'>
      <div className='flex flex-col lg:flex-row items-center justify-between'>

        <div className='relative space-y-7 z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[60%]'>

          <h3 className='text-[#DF6951] font-bold text-sm md:text-lg uppercase tracking-widest'>
            BEST DESITNATIONS AROUND THE WORLD
          </h3>
          
          <div className='relative'>
            <h1 className='text-[40px] md:text-6xl lg:text-[76px] font-bold text-[#181E4B] leading-tight'>
              Travel, <span className='relative inline-block'>enjoy
                <img src="/line.png" alt="" className='absolute -bottom-1 left-0 w-full z-[-1]' />
              </span> and live a new and full life
            </h1>
          </div>

          <p className='text-[#5E6282] text-base md:text-lg lg:max-w-[480px] leading-relaxed font-medium'>
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-10 pt-4 w-full'>
            <button className='bg-[#F1A501] px-7 py-4 rounded-xl text-white font-medium hover:shadow-xl transition-all shadow-md sm:w-max cursor-pointer'>
              Find out more
            </button>

            <div className='flex items-center gap-4 group cursor-pointer'>
              <div className='bg-[#DF6951] shadow-lg shadow-[#df695166] w-12 h-12 rounded-full flex justify-center items-center transition-transform group-hover:scale-110'>
                <FaPlay className='text-white text-xs ml-1' />
              </div>
              <p className='text-[#686D77] font-semibold'>Play Demo</p>
            </div>
          </div>
        </div>

        <div className='relative w-full lg:w-[50%] mt-12 lg:mt-0 flex justify-center lg:justify-end'>
          <img src="/girl-img.svg" alt="Traveler" className='w-full max-w-[400px] md:max-w-[550px] lg:max-w-none h-auto' />
        </div>
        
      </div>
    </div>
  )
}

export default Hero;

