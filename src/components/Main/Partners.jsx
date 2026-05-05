import React from 'react';
import Slick from "react-slick";

const Slider = Slick.default || Slick;

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  const logos = [
    "/axon-logo.png",
    "/jetstar-logo.png",
    "/expedia-logo.png",
    "/qantas-logo.png",
    "/jetstar-logo.png",
  ];

  return (
    <div className='w-[80%] mx-auto mt-12'>
      
      {/* Mobile */}
      <div className='grid grid-cols-1 gap-8 md:hidden'>
        {logos.map((logo, index) => (
          <div key={index} className='flex justify-center items-center'>
            <img 
              src={logo} 
              alt="partner logo" 
              className='h-10 w-auto object-contain opacity-70' 
            />
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className='hidden md:block'>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="outline-none">
              <div className='flex justify-center items-center px-4'>
                <img 
                  src={logo} 
                  alt="partner logo" 
                  className='h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity' 
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default Partners;

