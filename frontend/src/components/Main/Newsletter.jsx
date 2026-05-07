import React from 'react'

import { MdMailOutline } from "react-icons/md";
import { RiTelegram2Fill } from "react-icons/ri";

const Newsletter = () => {
  return (
    <div className='relative w-[80%] md:w-[80%] mx-auto mt-20 bg-[#F9F7FE] rounded-tl-[80px] rounded-2xl p-8 md:p-16'>
      
      {/* CONTENT WRAPPER */}
      <div className='relative z-10 flex flex-col items-center space-y-10'>
        <h2 className='text-xl md:text-2xl font-bold text-[#5E6282] text-center max-w-2xl leading-relaxed'>
          Subscribe to get information, latest news and other <br className='hidden md:block' /> interesting offers about Cobham
        </h2>

        <div className='flex flex-col sm:flex-row items-center gap-4 w-full justify-center'>
          {/* Input Box */}
          <div className='bg-white flex items-center gap-4 h-14 rounded-xl px-4 w-full sm:w-80 shadow-sm border border-gray-100'>
            <MdMailOutline className='text-gray-400 text-xl' />
            <input 
              type="email" 
              placeholder='Your email' 
              className='outline-none w-full text-gray-600 bg-transparent' 
            />
          </div>
          
          {/* Button */}
          <button className='bg-gradient-to-b from-[#FF946D] to-[#FF7D68] h-14 text-white px-10 rounded-xl font-semibold w-full sm:w-auto hover:shadow-lg transition-shadow'>
            Subscribe
          </button>
        </div>
      </div>
      
      <div className='absolute -top-6 -right-6 bg-gradient-to-tr from-[#5E3BE1] to-[#7352EB] p-4 rounded-full text-white shadow-xl hidden md:block'>
         <RiTelegram2Fill className='size-6 rotate-12' />
      </div>
    </div>
  )
}

export default Newsletter;


