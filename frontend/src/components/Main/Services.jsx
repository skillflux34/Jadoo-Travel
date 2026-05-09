import React from 'react'

const Services = () => {
  const services = [
    {
      img: "/weather.png",
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vantity itself do in it.",
      size: "w-16 sm:w-18"
    },
    {
      img: "/flights.png",
      title: "Best Flight",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
      size: "w-20 sm:w-24"
    },
    {
      img: "/events.png",
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
      size: "w-20 sm:w-24"
    },
    {
      img: "/customization.png",
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers.",
      size: "w-16 sm:w-20"
    }
  ]

  return (
    <div className='w-[70%] md:w-[80%] md:mt-16 mx-auto'>
      <div className='relative'>

        {/* Top Right Background Decor */}
        <div className='absolute top-0 right-[-80px] lg:right-[-120px] hidden sm:block pointer-events-none'>
          <img src="/services-img.png" alt="" className='w-[120px] sm:w-[160px] lg:w-[200px]' />
        </div>

        {/* Heading */}
        <div className='pt-16 sm:pt-24 text-center'>
          <p className='text-sm text-gray-500 font-medium tracking-widest'>CATEGORY</p>
          <h4 className='text-xl sm:text-3xl font-bold text-[#1e1d4c] mt-2'>
            We Offer Best Services
          </h4>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16'>

          {services.map((item, index) => (
            <div key={index} className='relative group'>
              
              {/* Rect Background - Isse Card ke niche hona chahiye */}
              {/* Humne negative z-index aur position adjust ki hai */}
              <div className='
                  absolute 
                  -bottom-5 -left-5
                  opacity-0 scale-50
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-500 ease-out
                  z-0
                '>
                <img src="/rect.png" alt="" className='w-20 sm:w-24' />
              </div>

              {/* Card - Iska z-index higher hona chahiye taake rect niche jaye */}
              <div className='bg-white relative z-10 py-10 px-4 space-y-5 text-center
                  h-full flex flex-col items-center justify-center
                  rounded-3xl transition-all duration-300
                  group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                  group-hover:scale-[1.02] bg-white'>

                <div className='flex justify-center h-20 items-center'>
                  <img src={item.img} alt="" className={item.size} />
                </div>

                <div className='space-y-3'>
                  <h5 className='font-bold text-[#1e1d4c] text-lg'>{item.title}</h5>
                  <p className='text-sm text-gray-500 leading-relaxed px-2'>{item.desc}</p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Services


