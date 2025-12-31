
import React from 'react'
import Badge from '../components/Badge'
import { GoDotFill } from "react-icons/go"
import Card from '../components/Card'

const DashboardPanel = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#23133A] via-[#281336] to-[#280F24] backdrop-blur-xl rounded-3xl p-5 border border-white/10 
     shadow-[0_0_45px_rgba(0,0,0,0.65)] space-y-3 overflow-hidden">

       <div
  className="
    absolute -top-2 -right-2 w-32 h-32 rounded-full hidden sm:flex
    bg-gradient-to-br from-pink-600 to-purple-700  shadow-[0_0_25px_rgba(236,72,153,0.6)]
    border border-white/20  z-0 pointer-events-none items-center justify-center overflow-hidden
  "
>
  <div
    className="
      w-28 h-28 rounded-full bg-black/80 transform rotate-[100deg]  backdrop-blur-sm
      border border-white/20  flex items-center justify-center
    "
  >
<span
  className="
    text-white font-[400] text-center text-[1rem]  "
>
  Build status: <span className='text-pink-900'>PLYM Games</span> Real-time dashboards
</span>

  </div>
</div>


        <div className="relative z-10 space-y-3">

          <div className="flex flex-wrap items-center justify-between">
            <p>Build status: PLYM Games</p>
            <Badge
              text="Smart cafe dashboards"
              color="yellow"
              className="text-[14px] font-[300]"
              icon={<GoDotFill className="animate-pulse text-sm" />}
            />
          </div>

          <div className="w-full rounded-2xl flex flex-col bg-[#261338]/70 backdrop-blur-sm
 border border-white/10 p-4 space-y-1">
            <div className="flex justify-between">
              <p className="text-[0.9rem] sm:text-[1rem] font-[400] text-gray-400">
                Frontend experience
              </p>
              <p className="text-[1rem] sm:text-[1.1rem] font-[500] text-white">
                82%
              </p>
            </div>

            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[90%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </div>

            <div className="flex justify-between text-[0.8rem] sm:text-[1rem] font-[400] text-gray-400">
              <span>Design polish</span>
              <span>Real-time dashboards</span>
            </div>
          </div>

          <div>
            <Card />
          </div>

          <p className="text-[1rem] font-[400] text-gray-400">
            PLYM Games Building the new layer for gaming cafes.
          </p>

          <p className="text-[0.8rem] font-[400] text-gray-400">
            Have a cafe?{" "}
            <span className="text-pink-600">
              Join the early access list --
            </span>
          </p>

        </div>
      </section>
    </>
  )
}

export default DashboardPanel
