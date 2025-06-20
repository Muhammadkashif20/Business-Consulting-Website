import React from 'react'
import pic3 from "../Image/pic 3.png"
import pic4 from "../Image/Rectangle 36.png"

const Expertise = () => {
  return (
      <div className="mx-32 my-28">
         <div className=" flex flex-row justify-between items-center">
           <div className="flex flex-col">
           <h1 className="font-medium text-4xl ">
             Transforming Finances <br />With Strategic Wealth <br /> Management   
           </h1>
           <div className="my-8">
             <p>
              Guiding You on Your Global Financial Success Journey Through <br/> Customized & Personalized Financial Consulting Services. Achieve <br/> 
              Your Goals with Data-Driven Expertise and Secure Your Financial <br/> Future, Successfully Navigating the Ever-Changing Finance 
             </p>
             <br/>
             <p>
            We're Committed to Providing You with Expert Guidance, Proven <br/> Strategies & Personalized Approach to Ensure Financial Prosperity
             </p>
           </div>
           <div className="my-10">
               <button className="w-[10rem] border-2 border-gray-300 p-3   rounded-sm font-semibold cursor-pointer">Explore Services</button>
           </div>
           </div>
          <div className="flex justify-end">
           <img src={pic4} alt="" className="w-[25rem] "/>
           <img src={pic3} alt="" className="w-[25rem] "/>
           </div>
         </div>
       </div>
  )
}

export default Expertise
