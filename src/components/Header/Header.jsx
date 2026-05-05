import React, { useState } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='w-[90%] md:w-[80%] mx-auto flex justify-between items-center py-6 md:py-10'>
        {/* Logo */}
        <div className='flex items-center'>
            <img 
                src="/logo.svg" 
                alt="Jadoo Logo"
                className='w-24 sm:w-28 h-auto object-contain'
            />
        </div>

        {/* Hamburger */}
        <div className='lg:hidden z-50'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
                <GiHamburgerMenu className='size-6 text-[#181E4B]' />
            </button>
        </div>

        {/* Menu */}
        <div className={`
            fixed lg:static top-0 left-0 w-full h-full lg:h-auto lg:w-auto 
            bg-white lg:bg-transparent z-40
            transition-all duration-300 flex flex-col lg:flex-row
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0
        `}>
            <ul className='
                flex flex-col lg:flex-row 
                gap-8 lg:gap-10 
                font-medium items-center justify-center lg:justify-end
                h-full lg:h-auto
                text-[#181E4B] text-lg lg:text-base
            '>
                <li className='cursor-pointer hover:text-[#DF6951] transition-colors'>Desitinations</li>
                <li className='cursor-pointer hover:text-[#DF6951] transition-colors'>Hotels</li>
                <li className='cursor-pointer hover:text-[#DF6951] transition-colors'>Flights</li>
                <li className='cursor-pointer hover:text-[#DF6951] transition-colors'>Bookings</li>
                <li className='cursor-pointer hover:text-[#DF6951] transition-colors'>Login</li>
                <li>
                    <button className='border-[1px] border-[#181E4B] px-5 py-2 rounded-md cursor-pointer hover:bg-[#181E4B] hover:text-white transition-all'>
                        Sign up
                    </button>
                </li>
                <li className='flex items-center cursor-pointer'>
                    EN<RiArrowDropDownLine className='size-6' />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;

