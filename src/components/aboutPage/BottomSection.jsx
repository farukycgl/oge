import React from 'react'

const BottomSection = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center px-4 py-16 bg-[#2A7CC7] text-white min-h-[400px]'>
      <h5 className='uppercase text-sm font-bold tracking-wider mb-6'>
        WORK WITH US
      </h5>
      
      <h2 className='text-4xl font-bold mb-6 leading-tight'>
        Now Let's<br />
        grow Yours
      </h2>
      
      <span className='max-w-md mb-8 text-sm leading-relaxed'>
        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
      </span>
      
      <button className='px-10 py-3 text-white bg-[#2A7CC7] rounded-md font-medium hover:bg-opacity-90 transition-all border-[1px] border-white'>
        Button
      </button>
    </div>
  )
}

export default BottomSection