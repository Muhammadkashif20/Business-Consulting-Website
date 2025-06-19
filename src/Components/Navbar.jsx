import React from 'react'

const Navbar = () => {
  return (
        <div className='flex flex-row justify-around items-center m-10'>
        <h1 className='font-bold text-2xl'>Prosperix</h1>
        <ul className='flex gap-10 font-semibold'>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
        <div className='flex gap-6'>
        <button className='text-[#008080] font-semibold'>Sign In</button>
        <button className="p-2 w-[7rem] bg-[#008080] text-white rounded-sm font-semibold">Get Started</button>
        </div>
      </div>
  )
}

export default Navbar
