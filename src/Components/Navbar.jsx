import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-row justify-around items-center m-10">
      <h1 className="font-bold text-2xl text-[#008080]">Prosperix</h1>

      <ul className={`flex gap-10 font-semibold sm:${isOpen ? <RxHamburgerMenu />  : "hidden"}`}>
        <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-105">Home</li>
        <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-105">Services</li>
        <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-105">Contact</li>
        <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-105">Help</li>
      </ul>

      <div className="flex gap-6">
        <button className="text-[#008080] font-semibold cursor-pointer transition duration-300 ease-in-out hover:text-[#004d4d]">Sign In</button>
        <button className="p-2 w-[7rem] bg-[#008080] text-white rounded-sm font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-[#006666] hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Navbar
