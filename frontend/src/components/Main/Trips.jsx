import React from 'react'

import { MdLocationSearching } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";

import { TbLeaf } from "react-icons/tb";
import { IoMdImages } from "react-icons/io";
import { TiLocationArrowOutline } from "react-icons/ti";

import { BsFillLuggageFill } from "react-icons/bs";

import { IoMdHeartEmpty } from "react-icons/io";

const Trips = () => {
  return (
    <div className='w-[90%] lg:w-[80%] mt-20 md:mt-28 mx-auto mb-20'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-10'>
        
        <div className='w-full lg:w-[45%] space-y-5'>
          <div className='text-center lg:text-left'>
            <p className='text-sm font-semibold text-gray-500 uppercase tracking-widest'>Easy and Fast</p>
            <h2 className='font-bold text-3xl md:text-4xl text-[#14183E] mt-2'>Book your next trip in 3 easy steps</h2>
          </div>
          
          <div className='pt-8'>
            <ul className='space-y-8'>
              <li className='flex items-start space-x-6'>
                <div className='flex-shrink-0 bg-yellow-400 text-white h-12 w-12 flex justify-center items-center rounded-xl'>
                  <MdLocationSearching className='size-6' />
                </div>
                <div>
                  <p className='font-bold text-[#5E6282]'>Choose Destination</p>
                  <p className='text-gray-500 text-sm leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, eaque dolor!</p>
                </div>
              </li>
              <li className='flex items-start space-x-6'>
                <div className='flex-shrink-0 bg-orange-400 text-white h-12 w-12 flex justify-center items-center rounded-xl'>
                  <RiSecurePaymentFill className='size-6' />
                </div>
                <div>
                  <p className='font-bold text-[#5E6282]'>Make Payment</p>
                  <p className='text-gray-500 text-sm leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, eaque dolor!</p>
                </div>
              </li>
              <li className='flex items-start space-x-6'>
                <div className='flex-shrink-0 bg-teal-500 text-white h-12 w-12 flex justify-center items-center rounded-xl'>
                  <FaCarRear className='size-6' />
                </div>
                <div>
                  <p className='font-bold text-[#5E6282]'>Reach Airport on Selected Date</p>
                  <p className='text-gray-500 text-sm leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, eaque dolor!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='relative w-full max-w-[400px] lg:w-[40%]'>
          <div className='relative p-5 shadow-2xl shadow-blue-100 bg-white rounded-3xl z-10'>
            <img src="/trip-pic.png" alt="Greece" className='w-full rounded-2xl object-cover' />
            <div className='pt-5 space-y-4'>
              <h6 className='font-bold text-lg text-[#080809]'>Trip To Greece</h6>
              <p className='text-gray-500 font-medium text-sm'>14-29 June | by Joseph</p>
              
              <div className='flex items-center space-x-4'>
                <div className='w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors'><TbLeaf className='size-5' /></div>
                <div className='w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors'><IoMdImages className='size-5' /></div>
                <div className='w-9 h-9 bg-[#F5F5F5] rounded-full flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors'><TiLocationArrowOutline className='size-5' /></div>
              </div>

              <div className='flex justify-between items-center pt-2'>
                <div className='flex items-center space-x-3 text-gray-500'>
                  <BsFillLuggageFill className='size-5' />
                  <p className='text-sm font-medium'>24 people going</p>
                </div>
                <IoMdHeartEmpty className='size-6 text-[#4152CA] cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='absolute -right-4 md:-right-20 bottom-16 flex gap-4 items-start w-64 bg-white p-4 shadow-2xl rounded-3xl z-20 border border-gray-50 animate-bounce-slow'>
            <div className='w-14 h-14 flex-shrink-0 rounded-full overflow-hidden'>
              <img src="/rome-trip.png" alt="Rome" className='w-full h-full object-cover' />
            </div>

            <div className='flex-1 space-y-2'>
              <div>
                <p className='text-xs font-medium text-gray-400'>Ongoing</p>
                <h6 className='font-bold text-[#080809]'>Trip to Rome</h6>
              </div>
              <div className='space-y-2'>
                <p className='text-xs'><span className='text-[#8A79DF] font-bold'>40%</span> <span className='font-semibold text-[#080809]'>completed</span></p>
                <div className='w-full bg-gray-100 h-1.5 rounded-full overflow-hidden'>
                  <div className='bg-[#8A79DF] h-full w-[40%] rounded-full'></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full -z-10'></div>
        </div>
      </div>
    </div>
  )
}

export default Trips;


