import React from 'react'

const BottomHero = () => {


  return (
    <div className='flex flex-col items-center pt-15 bg-[#FFFFFF]'>
      <div className='flex flex-col items-center text-center gap-5'>
        <h2 className='text-[#BDBDBD]'>SUMMER 2020</h2>
        <h1>Part of the<br />Neural<br />Universe</h1>
        <p>We know how large objects will act, but things on a small scale.</p>
      </div>
      <div className='flex flex-col items-center gap-5 pt-5'>
        <button className="w-full h-12 px-6 py-3 text-white bg-blue-500 rounded-lg">BUY NOW</button>
        <button className="w-full h-12 px-6 py-3 text-blue-500 bg-white rounded-lg border-[1px] border-blue-500">Learn More</button>
      </div>
      <div className='pt-5'>
        <img src="https://picsum.photos/600/400?random=1" alt="" />
      </div>
    </div>
  )
}

export default BottomHero;