import React from 'react'
import featureData from './features'

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {featureData.map((item, index) => (
        <div
          key={index}
          className="p-3 rounded-xl bg-black/15 border border-white/10"
        >
          <p className="text-gray-400 font-medium text-[0.75rem] sm:text-[0.8rem]">{item.title}</p>
          <p className="text-gray-100 text-[1rem] sm:text-[1.1rem] font-[500]">{item.description}</p>
          <p className="text-green-500 text-[0.75rem] sm:text-[0.8rem]">{item.status}</p>
        </div>
      ))}
    </div>
  )
}

export default Card
