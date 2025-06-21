import React from "react";
import Group83 from "../Image/Group 83.png";
import Group84 from "../Image/Group 84.png";
import Group85 from "../Image/Group 85.png";
import Group86 from "../Image/Group 86.png";
import Group96 from "../Image/Group 96.png";
import line from "../Image/Line 10.png";


const Services = () => {
  return (
    <div className="mx-32 my-28">
      <div className=" flex flex-row justify-between items-center">
        <div className="flex justify-start">
          <img src={Group96} className="w-[27rem] h-[32rem]" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-5 ">
            <h2 className="bg-[#EDFBFA] text-[#008080] text-center w-[9rem]">
              OUR SERVICES
            </h2>
            <img src={line} alt="" className="h-[2px] w-[5rem]" />
          </div>
          <h1 className="font-semibold text-4xl my-2">
            Our Services Can Help You <br /> Grow Your Investments <br /> and
            Wealth
          </h1>
          <div className="my-6">
            <p>
              Embark on a Journey to Unlock a World of Financial Opportunities,{" "}
              <br />
              Grow Your Investment with Our Comprehensive and Expert Services
            </p>
          </div>
          <div className="flex flex-row items-center gap-6">
              <img src={Group83} alt="" className="w-7"/>
              <span className="font-semibold ">Financial Planning</span>
               <img src={Group84} alt="" className="w-7"/>
              <span className="font-semibold">Investment Advisory</span>
          </div>
            <div className="flex flex-row items-center gap-6 my-8">
              <img src={Group86} alt="" className="w-7"/>
              <span className="font-semibold ">Estate Planning</span>
               <img src={Group85} alt="" className="w-7 ml-5"/>
              <span className="font-semibold">Wealth Management</span>
          </div>
          <div className="my-4">
            <button className="w-[10rem] border-2 border-gray-300 p-3 rounded-sm font-semibold cursor-pointer">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
