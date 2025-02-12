import React from 'react'

const Navbar = () => {

  return ( <>
 <nav className='w-screen flex justify-between items-center'>
    <div>
        <h1 className='ml-4'>Bandage</h1>
    </div>
    <div >
        <ul className='flex flex-row space-x-4 mr-4'>
            <li><img src="/icons/kullanici.jpg" alt="" /></li>
            <li><img src="/icons/buyutec.jpg" alt="" /></li>
            <li><img src="/icons/sepet.jpg" alt="" /></li>
            <li><img src="/icons/uc-cizgi.jpg" alt="" /></li>
        </ul>
    </div>
 </nav>
    
    </>)
}

export default Navbar;
