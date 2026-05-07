import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { useAuth } from '../../context/AuthContext';

import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className='w-[90%] md:w-[80%] mx-auto flex justify-between items-center py-6 md:py-10'>
        {/* Logo */}
        <div className='flex items-center cursor-pointer' onClick={() => navigate("/")}>
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
                
                {!user ? (
                    <>
                    <li onClick={() => navigate("/login")} className="cursor-pointer">Login</li>
                    <li>
                        <button onClick={() => navigate("/signup")} className="...">Sign up</button>
                    </li>
                    </>
                ) : (
                    <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#DF6951]">Hi, {user.username}</span>
                    <li>
                        <button onClick={handleLogout} className="bg-[#DF6951] text-white px-5 py-2 rounded-md">
                        Logout
                        </button>
                    </li>
                    </div>
                )}

                {user?.role === 'admin' && (
                    <li onClick={() => navigate("/admin/dashboard")} className="text-red-500 font-bold cursor-pointer">
                        Admin Panel
                    </li>
                )}
                
                <li className='flex items-center cursor-pointer'>
                    EN<RiArrowDropDownLine className='size-6' />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header;

