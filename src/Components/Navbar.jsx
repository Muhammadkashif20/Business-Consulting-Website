import React from 'react'

const Navbar = () => {
  return (
        <div className='flex flex-row justify-around items-center m-10'>
        <h1 className='font-bold text-2xl'>Prosperix</h1>
        <ul className='flex gap-10 font-semibold'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Services</li>
          <li className='cursor-pointer'>Contact</li>
          <li className='cursor-pointer'>Help</li>
        </ul>
        <div className='flex gap-6'>
        <button className='text-[#008080] font-semibold cursor-pointer'>Sign In</button>
        <button className="p-2 w-[7rem] bg-[#008080] text-white rounded-sm font-semibold cursor-pointer">Get Started</button>
        </div>
      </div>
  )
}

export default Navbar
