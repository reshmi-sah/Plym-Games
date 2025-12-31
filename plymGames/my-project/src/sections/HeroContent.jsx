import React from 'react'
import Badge from '../components/Badge'
import { GoDotFill } from "react-icons/go";

const HeroContent = () => {
  return (
    <>
    <section className='space-y-5'>
<div className="flex flex-wrap items-center gap-2 sm:gap-3">

  <span className="relative inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-2xl
      bg-gradient-to-br from-indigo-600 via-blue-600 to-pink-500">
    <span className="absolute inset-0 rounded-full bg-pink-500 blur-md opacity-80"></span>
    <span className="relative z-10 flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full 
        bg-gradient-to-br from-indigo-600 via-blue-600 to-pink-600 
        border border-gray-400 text-black text-[0.8rem] sm:text-[1rem] font-semibold">
      PG
    </span>
  </span>

  <span className="text-white text-[0.9rem] sm:text-[1rem] font-[600]">PLYM Games</span>
  <span className="text-gray-400 text-[0.8rem] sm:text-[0.9rem] font-[600]">Gaming Café OS</span>
</div>


    <div className="space-y-3 sm:space-y-4">
  <p
    className="text-3xl sm:text-4xl md:text-4xl font-[700] leading-tight
    inline-block bg-clip-text text-transparent"
    style={{
      backgroundImage: "linear-gradient(90deg, #ec4899 0%, #fb923c 50%, #553470 100%)",
    }}
  >
    Something powerful
  </p>

  <p className="text-2xl sm:text-3xl md:text-4xl font-[600] text-white leading-tight">
    is loading behind this screen.
  </p>

  <p className="text-[0.9rem] sm:text-[1rem] md:text-[1.05rem] mt-2 sm:mt-4 text-gray-400">
    PLYM Games is building a connected layer for gaming cafes and players. Real-time bookings, live sessions, passes, ranking, and more — all in one beautiful dashboard.
  </p>
</div>


     <div className="flex flex-wrap gap-2 sm:gap-3">
  <Badge
    text="Smart cafe dashboards"
    color="red"
    className="text-[0.65rem] sm:text-[0.7rem] md:text-[0.8rem] font-[300]"
    icon={<GoDotFill className="animate-pulse text-[0.65rem] sm:text-sm" />}
  />
  <Badge
    text="One-tap session booking"
    color="red"
    className="text-[0.65rem] sm:text-[0.7rem] md:text-[0.8rem] font-[300]"
    icon={<GoDotFill className="animate-pulse text-[0.65rem] sm:text-sm" />}
  />
  <Badge
    text="Razorpay ready"
    color="red"
    className="text-[0.65rem] sm:text-[0.7rem] md:text-[0.8rem] font-[300]"
    icon={<GoDotFill className="animate-pulse text-[0.65rem] sm:text-sm" />}
  />
</div>


      <div className='flex flex-wrap  gap-3 items-center mt-4 space-x-5 '>
           <button 
    className="relative text-[0.9rem] sm:text-[1rem] font-[500] text-black px-4 py-2 rounded-full
               bg-gradient-to-r from-pink-600 to-indigo-600
               bg-[length:200%_100%] bg-left hover:bg-right
               transition-all duration-700 ease-in-out shadow-[0_12px_25px_rgba(0,0,0,0.55)]">
    <span className="absolute inset-0 rounded-full bg-indigo-700 blur-md opacity-50"></span>
    <span className="relative z-10">Get launch update</span>
  </button>
      <Badge text="View roadmap" color='green' className='text-[0.8rem] font-[400] ' />
        <p className='text-sm flex items-center text-gray-400 '>
          <GoDotFill className="animate-pulse text-sm text-green-500 " />
           v1 experience arriving soon</p>
      </div>

      <div>
      
      <div className='space-y-4 inline-block  '>
         <Badge
              text="Now:" color="red"
              className="text-[1rem] font-[400] text-white"
            >
              <span className="text-[0.9rem] text-gray-400">Core booking flow & cafe 100ls in testing.</span>
              </Badge>

           <Badge
              text="Next:" color="red"
              className="text-[1rem] font-[400] text-white"
            >
              <span className="text-[0.9rem] text-gray-400">Player profiles, rankings, and live passes.</span>
              </Badge>
      </div>

      </div>
    </section>
    </>
  )
}

export default HeroContent
