// import React from 'react'
// import { TbLocationFilled } from "react-icons/tb";
// import { motion } from "framer-motion";

// const cardVariant = {
//   hidden: { opacity: 0, y: 80 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   })
// }

// const Destinations = () => {
//   const data = [
//     {
//       img: "/rome.png",
//       title: "Rome, Italy",
//       price: "$5.42k",
//       days: "10 days trip"
//     },
//     {
//       img: "/london.png",
//       title: "London, UK",
//       price: "$4.2k",
//       days: "12 days trip"
//     },
//     {
//       img: "/europe.png",
//       title: "Full Europe",
//       price: "$15k",
//       days: "26 days trip"
//     }
//   ]

//   return (
//     <div className='w-[80%] md:w-[80%] mt-8 mx-auto'>
//       <div>

//         {/* Heading */}
//         <div className='pt-16 sm:pt-24 text-center'>
//           <p className='text-sm text-gray-500'>Top selling</p>
//           <h4 className='text-xl sm:text-2xl font-semibold'>
//             Top Destinations
//           </h4>
//         </div>

//         {/* Grid */}
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>

//           {data.map((item, index) => (
//             <motion.div
//               key={index}
//               custom={index}
//               variants={cardVariant}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className='shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300'
//             >
//               <img src={item.img} alt="" className='w-full' />

//               <div className='px-5 py-4 space-y-2 font-semibold'>
//                 <div className='flex justify-between'>
//                   <p>{item.title}</p>
//                   <p>{item.price}</p>
//                 </div>

//                 <div className='flex items-center gap-3 text-gray-600'>
//                   <TbLocationFilled />
//                   <p>{item.days}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Destinations





import React, { useEffect, useState } from 'react'
import { TbLocationFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import api from "../../api/axiosConfig";
import Loader from '../Loader';

const cardVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const Destinations = ({ role }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await api.get("/featured-destinations");

        setDestinations(response.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) return <Loader />

  return (
    <div className='w-[80%] md:w-[80%] mt-8 mx-auto'>
      <div className='relative'>

        {/* Heading */}
        <div className='pt-16 sm:pt-24 text-center'>
          <p className='text-sm text-gray-500 uppercase tracking-widest'>Top selling</p>
          <h4 className='text-xl sm:text-2xl font-bold text-[#181E4B]'>
            Top Destinations
          </h4>
        </div>

        {/* Dynamic Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
          {destinations.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='shadow-lg rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 bg-white'
            >
              <div className='h-64 overflow-hidden'>
                <img 
                  src={item.image_url} 
                  alt={item.title} 
                  className='w-full h-full object-cover' 
                />
              </div>

              <div className='px-5 py-6 space-y-3 font-semibold text-black'>
                <div className='flex justify-between text-lg'>
                  <p>{item.title}</p>
                  <p>Rs. {item.price}</p>
                </div>

                <div className='flex items-center gap-3'>
                  <TbLocationFilled className='text-gray-500' />
                  <p className='text-sm text-gray-500'>{item.days} Days Trip</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='mt-16 text-center'>
            <button 
                onClick={() => navigate('/destination')}
                className='border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md'
            >
                See More
            </button>
        </div>

      </div>
    </div>
  )
}

export default Destinations;

