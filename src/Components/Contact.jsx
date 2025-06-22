import React from "react";
import Rectangle from "../Image/Rectangle 41.png";
import line from "../Image/Line 2.png";
import { FaRegEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="mx-32 my-5">
      <div>
        <img src={Rectangle} alt="" className="w-[70rem] h-[24rem]" />
        <div className="flex items-center gap-1 relative bottom-[23rem] font-semibold text-[1rem] mx-3 mt-7">
          <h2 className=" text-[#2CDFD5] text-center w-[9rem]">START NOW</h2>
          <img src={line} alt="" className="h-[2px] w-[4rem]" />
        </div>
       <div className="flex flex-col relative bottom-[22rem] mx-10 my-5">
        <h1 className="font-bold text-white text-3xl ">
          Get Start For Free No <br/> Credit Card Required 
        </h1>
        <div className="mt-12 flex gap-3">
          <div className="bg-white p-1 rounded-sm">
            <FaRegEnvelope className="relative top-3 left-2 text-gray-500 "/>
          <input type="text" placeholder="Email Address" className=" placeholder:text-gray-600 text-sm mx-9 relative bottom-2 outline-none  w-[12rem]"/>
          </div>
            <button className="w-[7rem] bg-[#20CFC6] text-white rounded-sm font-semibold cursor-pointer">Get Started</button>
        </div>
        <div className="my-7">
          <p className="text-[#D3D3D3]">Want to contact our team and book a call? <span className="text-[#20CFC6] cursor-pointer">Try it now</span></p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
