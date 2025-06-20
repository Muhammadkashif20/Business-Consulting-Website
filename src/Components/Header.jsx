import { Image } from "antd";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import pic1 from "../Image/pic 1.png"
const Header = () => {
  return (
    <div className="mx-32 my-28">
      <div className=" flex flex-row justify-between items-center">
        <div className="flex flex-col">
        <h1 className="font-semibold text-5xl leading-13">
          Navigating the <br /> <span className="text-[#008080]">Global</span> financial <br /> landscape
        </h1>
        <div className="my-8">
          <p>
            Empowering Your Journey to Global Financial <br/> Success Through
            Customized and Personalized <br/> Financial Consulting for Every Client
          </p>
        </div>
        <div className="my-10 flex gap-3">
          <div className="bg-white p-1 ">
            <FaRegEnvelope className="relative top-3 left-2 text-gray-500 "/>
          <input type="text" placeholder="Your email address" className=" placeholder:text-gray-600 text-sm mx-9 relative bottom-2 outline-none"/>
          </div>
            <button className="w-[7rem] bg-[#008080] text-white rounded-sm font-semibold cursor-pointer">Get Started</button>
        </div>
        </div>
       <div className="flex justify-end relative bottom-7">
        <img src={pic1} alt="" className="w-[25rem]"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
