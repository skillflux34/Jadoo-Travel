import React from 'react'
import { FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slick from "react-slick";

const Slider = Slick.default || Slick;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div className="slick-next cursor-pointer" onClick={onClick}>
    <FaChevronDown className="hidden md:block text-black text-xl" />
    <FaChevronRight className="block md:hidden text-black text-lg" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-prev cursor-pointer" onClick={onClick}>
    <FaChevronUp className="hidden md:block text-black text-xl" />
    <FaChevronLeft className="block md:hidden text-black text-lg" />
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true, // This will be overridden by CSS/Responsive if needed
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  };

  const testimonialsData = [
    { id: 1, name: "Mike Taylor", location: "Lahore, Pakistan", text: "On the windows of talking painted pasture yet its express parties use Sure last long and its my best part." },
    { id: 2, name: "Sarah Jones", location: "London, UK", text: "The service was incredibly smooth. I've never had an experience quite like this before." },
    { id: 3, name: "Chris Evans", location: "New York, USA", text: "A fantastic interface and even better support. They really care about the user experience." },
    { id: 4, name: "Anaya Khan", location: "Dubai, UAE", text: "Simple, elegant, and efficient. It has completely changed the way we handle our tasks." }
  ];

  return (
    <div className='w-[85%] md:w-[80%] mx-auto mt-20'>
      <div className='flex flex-col lg:flex-row justify-between gap-10'>

        {/* LEFT TEXT */}
        <div className='space-y-3 max-w-sm text-center lg:text-left'>
          <p className='text-sm font-semibold text-gray-500 md:pt-20'>TESTIMONIALS</p>
          <h2 className='text-2xl sm:text-3xl font-semibold text-[#14183E]'>
            What people say about Us.
          </h2>
        </div>

        {/* RIGHT SLIDER */}
        <div className='w-full lg:w-[50%] relative testimonial-vertical-wrapper'>
          <Slider {...settings}>
            {testimonialsData.map((user) => (
              <div key={user.id} className='outline-none py-12'>
                <div className='relative min-h-[300px] flex flex-col justify-center px-2'>
                  
                  {/* Icon Image  */}
                  <i className='absolute -top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 z-20'>
                    <img src="/slider-icon.png" alt="quote-icon" className='size-14 md:size-16 object-contain' />
                  </i>

                  {/* Card */}
                  <div className='bg-white shadow-xl rounded-2xl p-8 md:p-10 text-center md:text-left border border-gray-50 md:mr-12'>
                    <p className='text-gray-600 text-base md:text-lg leading-relaxed mt-4 md:mt-0'>
                      “{user.text}”
                    </p>

                    <h4 className='mt-6 font-bold text-xl text-gray-800'>
                      {user.name}
                    </h4>
                    
                    <p className='text-sm text-gray-400'>
                      {user.location}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        /* Desktop Settings */
        @media (min-width: 768px) {
          .testimonial-vertical-wrapper { padding-right: 50px; }
          .testimonial-vertical-wrapper .slick-prev { top: 35% !important; right: 0 !important; left: auto !important; }
          .testimonial-vertical-wrapper .slick-next { top: 65% !important; right: 0 !important; left: auto !important; }
        }

        /* Mobile Settings */
        @media (max-width: 767px) {
          .testimonial-vertical-wrapper .slick-prev,
          .testimonial-vertical-wrapper .slick-next {
            top: auto !important;
            bottom: 25px !important;
            transform: none !important;
          }
          .testimonial-vertical-wrapper .slick-prev { left: 40px !important; right: auto !important; }
          .testimonial-vertical-wrapper .slick-next { right: 40px !important; left: auto !important; }
        }

        /* Arrow Styles */
        .testimonial-vertical-wrapper .slick-prev,
        .testimonial-vertical-wrapper .slick-next {
          z-index: 30;
          width: 40px;
          height: 40px;
          background: #ffffff !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }

        .testimonial-vertical-wrapper .slick-prev:before,
        .testimonial-vertical-wrapper .slick-next:before {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Testimonials

