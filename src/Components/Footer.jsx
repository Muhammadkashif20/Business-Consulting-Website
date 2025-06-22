import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import Line12 from "../Image/Line 12.png"

const Footer = () => {
  return (
    <div className="bg-[#008080] w-full h-[75vh] text-white mt-32">
      <div className="flex flex-row justify-between ">
        {/* Column 1 */}
        <div>
          <h1>Prosperix</h1>
          <p>
            Our expert financial consultants provide <br />
            solutions to help you achieve financial <br />
            wealth. Trust us to guide you toward a <br />
            brighter financial future.
          </p>
          <div className="flex gap-4 mt-4 flex-row">
            <div className="flex gap-2 items-center">
              <FaFacebookF />
              <span>Facebook</span>
            </div>
            <div className="flex gap-2 items-center">
              <CiTwitter />
              <span>Twitter</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaInstagram />
              <span>Instagram</span>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="">
          <h1>Our Services</h1>
          <div>
            <ul className="list-none">
              <li>Insurance Planning</li>
              <li>Estate Planning</li>
              <li>Tax Optimization</li>
              <li>Debt Management</li>
            </ul>
          </div>
        </div>
        {/* Column 3 */}
        <div className="">
          <h1>Explore More</h1>
          <div>
            <ul className="list-none">
              <li>About us</li>
              <li>Blog</li>
              <li>Site map</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        {/* Column 4 */}
         <div className="">
          <h1>Contact Details</h1>
          <div>
            <ul className="list-none">
              <li>contact@briofin.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        {/* footer bottom */}
        <div>
          <img src={Line12} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
