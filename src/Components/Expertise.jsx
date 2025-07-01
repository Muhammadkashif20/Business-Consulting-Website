import React from 'react';
import Group95 from "../Image/Group95.png";
import line from "../Image/Line10.png";

const Expertise = () => {
  return (
    <div className="mx-32 my-16">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-5">
            <h2 className="bg-[#EDFBFA] text-[#008080] text-center w-[9rem]">
              OUR EXPERTISE
            </h2>
            <img
              src={line}
              alt=""
              className="h-[2px] w-[5rem] transition duration-300 ease-in-out hover:scale-105"
            />
          </div>

          <h1 className="font-medium text-3xl mt-4 lg:text-4xl ">
            Transforming Finances <br />
            With Strategic Wealth <br />
            Management
          </h1>

          <div className="my-8 text-[.85rem]  lg:text-[1rem] md:tracking-wide">
            <p>
              Guiding You on Your Global Financial Success Journey Through <br />
              Customized & Personalized Financial Consulting Services. Achieve <br />
              Your Goals with Data-Driven Expertise and Secure Your Financial <br />
              Future, Successfully Navigating the Ever-Changing Finance
            </p>
            <br />
            <p>
              We're Committed to Providing You with Expert Guidance, Proven <br />
              Strategies & Personalized Approach to Ensure Financial Prosperity
            </p>
          </div>

          <div className="my-10">
            <button className="w-[10rem] border-2 border-gray-300 p-3 rounded-sm font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-[#008080] hover:text-white hover:scale-105">
              Explore Services
            </button>
          </div>
        </div>

        <div className="flex justify-end md:ms-14">
          <img
            src={Group95}
            className="w-[20rem] h-[20rem] md:w-[27rem] md:h-[23rem] lg:w-[27rem] h-[30rem] transition duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
