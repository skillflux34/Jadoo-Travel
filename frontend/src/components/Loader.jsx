import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full">
      <div className="relative w-20 h-20">
        {/* Outer Ring */}
        <div className="absolute inset-0 border-4 border-[#FFF9F1] border-t-[#FF9901] rounded-full animate-spin"></div>
        
        {/* Inner Pulsing Circle */}
        <div className="absolute inset-4 bg-[#DF6951] rounded-full animate-pulse opacity-70"></div>
        
        {/* Center Dot */}
        <div className="absolute inset-7 bg-[#181E4B] rounded-full"></div>
      </div>
      
      <p className="mt-6 text-[#181E4B] font-bold tracking-widest animate-bounce">
        PREPARING YOUR ADVENTURE...
      </p>
      
      {/* Decorative dots */}
      <div className="flex gap-2 mt-2">
        <div className="w-2 h-2 bg-[#FF9901] rounded-full animate-ping"></div>
        <div className="w-2 h-2 bg-[#FF9901] rounded-full animate-ping [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 bg-[#FF9901] rounded-full animate-ping [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
};

export default Loader;

