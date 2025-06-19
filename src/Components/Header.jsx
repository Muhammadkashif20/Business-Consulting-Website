import React from "react";

const Header = () => {
  return (
    <div>
      <div className="mx-32 my-28">
        <h1 className="font-semibold text-5xl leading-13">
          Navigating the <br /> <span className="text-[#008080]">Global</span> financial <br /> landscape
        </h1>
        <div className="my-5">
          <p>
            Empowering Your Journey to Global Financial <br/> Success Through
            Customized and Personalized <br/> Financial Consulting for Every Client
          </p>
        </div>
        <div className="my-10 flex gap-3">
          <Fonta icon="fa-solid fa-envelope" />
          <input type="text" placeholder="Your email address" className="bg-white p-3 w-[25%] placeholder:text-gray-600 text-sm"/>
            <button className="p-2 w-[7rem] bg-[#008080] text-white rounded-sm font-semibold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
