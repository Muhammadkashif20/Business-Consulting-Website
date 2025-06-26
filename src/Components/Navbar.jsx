import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md relative z-50">
      {/* Top Navbar */}
      <div className="flex flex-row justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="font-bold text-2xl text-[#008080]">Prosperix</h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:hidden lg:inline-flex sm:flex gap-10 font-semibold text-gray-700">
          <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-105">Home</li>
          <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-105">Our Services</li>
          <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-105">Contact Us</li>
          <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-105">Help Center</li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:hidden lg:inline-flex sm:flex gap-6">
          <button className="text-[#008080] font-semibold cursor-pointer transition duration-300 ease-in-out hover:text-[#004d4d]">Sign In</button>
          <button className="p-2 w-[7rem] bg-[#008080] text-white rounded-sm font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-[#006666] hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <RxHamburgerMenu 
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown - inside same navbar box */}
      {isOpen && (
        <div className="lg:hidden w-full px-6 my-5 pb-4 bg-white">
          <ul className="flex flex-col gap-4 font-medium text-gray-700">
            <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-[1.03]">Home</li>
            <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-[1.03]">Our Services</li>
            <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-[1.03]">Contact Us</li>
            <li className="cursor-pointer hover:text-[#008080] transition duration-300 ease-in-out hover:scale-[1.03]">Help Center</li>
          </ul>
          <div className="flex flex-col gap-3 w-full mt-4">
            <button className="text-[#008080] font-semibold cursor-pointer hover:text-[#004d4d] transition">Sign In</button>
            <button className="p-2 w-full bg-[#008080] text-white rounded-sm font-semibold cursor-pointer hover:bg-[#006666] transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
