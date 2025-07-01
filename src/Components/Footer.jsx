import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#008080] w-full h-[75vh] text-white mt-32">
      <div className="flex flex-row justify-around">
        {/* Column 1 */}
        <div className="mt-16 mx-16">
          <h1 className="font-bold text-2xl">Prosperix</h1>
          <p className="my-6">
            Our expert financial consultants provide <br />
            solutions to help you achieve financial <br />
            wealth. Trust us to guide you toward a <br />
            brighter financial future.
          </p>
          <div className="flex gap-4 flex-row my-8">
            <div className="flex gap-2 items-center cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:scale-105">
              <FaFacebookF />
              <span>Facebook</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:scale-105">
              <CiTwitter />
              <span>Twitter</span>
            </div>
            <div className="flex gap-2 items-center cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:scale-105">
              <FaInstagram />
              <span>Instagram</span>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="mt-16">
          <h1 className="font-bold text-2xl">Our Services</h1>
          <div>
            <ul className="list-none leading-12 mt-4">
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">Insurance Planning</li>
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">Estate Planning</li>
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">Tax Optimization</li>
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">Debt Management</li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="mt-16">
          <h1 className="font-bold text-2xl">Explore More</h1>
          <div>
            <ul className="list-none leading-12 mt-4">
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">About us</li>
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">Blog</li>
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">Site map</li>
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">Privacy</li>
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className="mt-16">
          <h1 className="font-bold text-2xl">Contact Details</h1>
          <div>
            <ul className="list-none leading-12 mt-4">
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">contact@briofin.com</li>
              <li className="cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:translate-x-1">+1 (555) 123-4567</li>
            </ul> 
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="flex flex-col mx-26 my-5 text-gray-300">
        <span>________________________________________________________________________________________________________________________________________________________________________</span>
        <span className="my-2">M.Kashif 2025 © All rights reserved</span>
        <div className="flex flex-row justify-end mt-[-1.5rem] gap-8">
          <span className="cursor-pointer transition duration-300 ease-in-out hover:text-white hover:underline">Terms & Conditions</span>
          <span className="cursor-pointer transition duration-300 ease-in-out hover:text-white hover:underline">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
