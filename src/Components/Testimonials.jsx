import React from "react";
import line from "../Image/Line 10.png";
import Feedback1 from "../Image/Feedback 1.png";
import Feedback2 from "../Image/Feedback 2.png";
import Feedback3 from "../Image/Feedback 3.png";

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-32 my-28">
      <div className="flex items-center gap-5 ">
        <h2 className="bg-[#EDFBFA] text-[#008080] text-center w-[9rem]">
          TESTIMONIALS
        </h2>
        <img src={line} alt="" className="h-[2px] w-[5rem]" />
      </div>
      <h1 className="font-medium text-4xl my-5">What Our Customers Say</h1>
      <div className="my-1">
        <p>
          Discover the Success Stories and Satisfaction of Clients Who Have{" "}
          <br /> Benefited from Our Expertise and Personalized Financial
          Guidance
        </p>
      </div>
      <div className="flex justify-between items-center my-10 gap-10"> 
        <img src={Feedback1} alt="" className="w-[20rem]"/>
        <img src={Feedback2} alt="" className="w-[20rem]"/>
        <img src={Feedback3} alt="" className="w-[20rem]"/>
      </div>
      
    </div>
  );
};

export default Testimonials;
