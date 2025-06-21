import React from "react";
import Group97 from "../Image/Group 97.png";
import Group98 from "../Image/Group 98.png";
import Group99 from "../Image/Group 99.png";

const ValueableService = () => {
  return (
    <div className="mx-32 my-5">
      <div>
        <h1 className="font-semibold text-3xl">
          Our Team Provides Valuable Services at <br /> Any Time in Any
          Situation
        </h1>
      </div>
      <div className="flex flex-row justify-between items-center my-10">
        {/* Group 1  */}
        <div>
          <img src={Group97} alt="" className="w-[3.5rem] my-5" />
          <h2 className="font-semibold text-[1.2rem]">Expert Guidance</h2>
          <p className="my-5">
            Rely on seasoned professionals for <br /> tailored financial advice
            and strategic <br /> planning aligned with your unique goals
          </p>
          <p className="text-[#008080] mt-8">Read more</p>
        </div>
        {/* Group 2  */}
        <div>
          <img src={Group98} alt="" className="w-[3.5rem] my-5" />
          <h2 className="font-semibold text-[1.2rem]">Risk Management</h2>
          <p className="my-5">
            We expertly handle and proactively <br /> mitigate financial risks,
            ensuring the <br /> safeguard of assets and overall stability
          </p>
          <p className="text-[#008080] mt-8">Read more</p>
        </div>
        {/* Group 3  */}
        <div>
          <img src={Group99} alt="" className="w-[3.5rem] my-5" />
          <h2 className="font-semibold text-[1.2rem]">Customized Solutions</h2>
          <p className="my-5">
            Receive and Benefit from with financial <br /> solutions that
            tailored to your unique <br /> financial challenges and aspirations
          </p>
          <p className="text-[#008080] mt-8">Read more</p>
        </div>
      </div>
    </div>
  );
};

export default ValueableService;
