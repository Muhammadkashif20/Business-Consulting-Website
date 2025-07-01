import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import pic1 from "../Image/pic1.png";
import pic2 from "../Image/pic2.png";

const Header = () => {
  return (
    <div className="mx-32 my-16">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="flex flex-col relative">
          <h1 className="font-semibold text-4xl lg:text-5xl  leading-13 ">
            Navigating the <br />{" "}
            <span className="text-[#008080] hover:text-[#006666] transition duration-300 ease-in-out cursor-pointer">
              Global
            </span>{" "}
            financial <br /> landscape
          </h1>

          <div className="my-8 text-[.85rem] lg:text-[1rem]">
            <p className="transition duration-300 ease-in-out hover:text-gray-700 cursor-pointer">
              Empowering Your Journey to Global Financial <br /> Success Through
              Customized and Personalized <br /> Financial Consulting for Every Client
            </p>  
          </div>

          <div className="my-4 flex flex-col gap-3 lg:flex-row ">
            <div className="bg-white p-1 rounded-sm transition duration-300 ease-in-out hover:scale-105 h-[3rem] ">
              <FaRegEnvelope className="relative top-3 left-2 text-gray-500" />
              <input
                type="text"
                placeholder="Your email address"
                className="placeholder:text-gray-600 text-sm mx-9 relative bottom-2 outline-none"
              />
            </div>

            <button className="w-[20rem] lg:w-[8rem] h-[3rem] bg-[#008080] text-white rounded-sm font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-[#006666] hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-[14rem] mt-10 md:w-[23rem] mx-14 lg:w-[25rem] flex justify-center items-center">
          <img
            src={pic1}
            alt=""
            className=" w-full transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <div className=" mt-10 w-[30rem]">
        <img
          src={pic2}
          alt=""
          className=" md:w-full lg:w-full relative right-26 md:right-0 lg:right-0 transition duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Header;
