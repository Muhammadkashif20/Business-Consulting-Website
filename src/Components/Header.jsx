import React from "react";

const Header = () => {
  return (
    <div>
      <div className="mx-auto">
        <h1 className="font-semibold text-5xl ">
          Navigating the <br /> Global financial <br /> landscape
        </h1>
        <div>
          <p>
            Empowering Your Journey to Global Financial <br/> Success Through
            Customized and Personalized <br/> Financial Consulting for Every Client
          </p>
        </div>
        <div>
            
          <input type="text" placeholder="your email address"/>
            <button className="p-2 w-[7rem] bg-[#008080] text-white rounded-sm font-semibold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
