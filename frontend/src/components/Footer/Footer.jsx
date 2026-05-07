import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-[80%] mx-auto py-5 mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Logo Section */}
        <div>
          <h3 className="inter-logo text-3xl sm:text-4xl lg:text-[45px]">
            Jadoo.
          </h3>
          <p className="text-[#35528B] mt-4 text-sm">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold">Company</h4>
          <ul className="pt-8 space-y-2 text-[#35528B] text-sm">
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">Mobile</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <ul className="pt-8 space-y-2 text-[#35528B] text-sm">
            <li className="hover:text-black cursor-pointer">Help / FAQ</li>
            <li className="hover:text-black cursor-pointer">Press</li>
            <li className="hover:text-black cursor-pointer">Affiliates</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h4 className="text-lg font-semibold">More</h4>
          <ul className="pt-8 space-y-2 text-[#35528B] text-sm">
            <li className="hover:text-black cursor-pointer">Airline Fees</li>
            <li className="hover:text-black cursor-pointer">Airline</li>
            <li className="hover:text-black cursor-pointer">Low Fare Tips</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <div className="flex gap-4">
            <div className="w-10 h-10 border-1 bg-white rounded-full flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 border-1 bg-white rounded-full flex items-center justify-center">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 border-1 bg-white rounded-full flex items-center justify-center">
              <FaTwitter />
            </div>
          </div>

          <p className="pt-4 text-[#35528B]">Discover our app</p>
          <div className='size-30 pt-4'><img src="/googleplay.png" alt="" /></div>
          
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-[#35528B]">
        All rights reserved@jadoo.co
      </div>
    </footer>
  )
}

export default Footer

