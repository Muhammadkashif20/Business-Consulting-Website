import React from "react";
import line from "../Image/Line10.png";
import Feedback1 from "../Image/Feedback1.png";
import Feedback2 from "../Image/Feedback2.png";
import Feedback3 from "../Image/Feedback3.png";

const Testimonials = () => {
  return (
    <div className="flex flex-col mx-32 my-28">
      <div className="flex items-center gap-5">
        <h2 className="bg-[#EDFBFA] text-[#008080] text-center w-[9rem]">
          TESTIMONIALS
        </h2>
        <img
          src={line}
          alt=""
          className="h-[2px] w-[5rem] transition duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <h1 className="font-medium text-4xl my-5">What Our Customers Say</h1>

      <div className="my-1">
        <p>
          Discover the Success Stories and Satisfaction of Clients Who Have{" "}
          <br /> Benefited from Our Expertise and Personalized Financial
          Guidance
        </p>
      </div>

      <div className="flex justify-between items-center mt-10 gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        <img
          src={Feedback1}
          alt=""
          className="w-[20rem] cursor-pointer transition duration-300 ease-in-out hover:scale-105"
        />
        <img
          src={Feedback2}
          alt=""
          className="w-[20rem] cursor-pointer transition duration-300 ease-in-out hover:scale-105"
        />
        <img
          src={Feedback3}
          alt=""
          className="w-[20rem] cursor-pointer transition duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Testimonials;
