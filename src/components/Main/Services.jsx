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

        {/* Top Right Image */}
        <div className='absolute top-0 right-[-80px] lg:right-[-120px] hidden sm:block'>
          <img src="/services-img.png" alt="" className='w-[120px] sm:w-[160px] lg:w-[200px]' />
        </div>

        {/* Heading */}
        <div className='pt-16 sm:pt-24 text-center'>
          <p className='text-sm text-gray-500'>CATEGORY</p>
          <h4 className='text-xl sm:text-2xl font-semibold'>
            We Offer Best Services
          </h4>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>

          {services.map((item, index) => (
            <div key={index} className='relative group'>

              {/* Card */}
              <div className='bg-white relative z-10 py-6 space-y-5 text-center
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg hover:rounded-2xl'>

                <div className='flex justify-center'>
                  <img src={item.img} alt="" className={item.size} />
                </div>

                <div className='w-[60%] max-w-[180px] mx-auto space-y-3'>
                  <h5 className='font-semibold'>{item.title}</h5>
                  <p className='text-sm text-gray-600'>{item.desc}</p>
                </div>
              </div>

              {/* Rect Background */}
              <div className='
                  absolute 
                  -bottom-8 -left-8
                  opacity-0 scale-75
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-300
                  pointer-events-none
                '>
                <img src="/rect.png" alt="" className='w-20 sm:w-24' />
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Services

