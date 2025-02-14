import React from 'react'
import Button from '../Button';

const BottomHero = () => {


  return (
    <div className='flex flex-col items-center mt-15'>
      <div className='flex flex-col items-center'>
        <h1>Part of the Neural Universe</h1>
        <p>We know how large objects will act, but things on a small scale.</p>
      </div>
      <div className='flex flex-col items-center gap-3 '>
        <Button className=" h-12 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">BUY NOW</Button>
        <Button className=" h-12 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Learn More</Button>
      </div>
      <div>
        <img src="https://picsum.photos/600/400?random=1" alt="" />
      </div>
    </div>
  )
}

export default BottomHero;