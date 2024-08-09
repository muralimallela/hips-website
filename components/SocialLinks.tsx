import React from 'react';
import { FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineWhatsapp } from "react-icons/md";
const FloatingIcons: React.FC = () => {
  return (
    <nav className="fixed bottom-10 left-1 flex flex-col items-end space-y-1 z-50">
      <ul className="flex flex-col ">
        <li>
          <a
            href="#"
            className="group flex items-center bg-blue-600 text-white w-9 h-9 rounded-t-md transition-all duration-300 lg:hover:w-36 lg:hover:rounded-r-md px-2"
          >
            <div><FaFacebook className="text-lg" /></div>
            <span className="ml-2 hidden lg:group-hover:inline font-bold uppercase tracking-wider">
              Facebook
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group flex items-center bg-[#000000] text-white w-9 h-9 transition-all duration-300 lg:hover:w-36 lg:hover:rounded-r-md px-2"
          >
            <div><BsTwitterX className="text-lg" /></div>
            <span className="ml-2 hidden lg:group-hover:inline font-bold uppercase tracking-wider">
              Twitter
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group flex items-center font-bold bg-pink-600 text-white w-9 h-9 transition-all duration-300 lg:hover:w-36 lg:hover:rounded-r-md px-2"
          >
            <div><BsInstagram className="text-lg" /></div>
            <span className="ml-2 hidden lg:group-hover:inline font-bold uppercase tracking-wider">
              Instagram
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group flex items-center bg-[#0a66c2] text-white w-9 h-9 transition-all duration-300 lg:hover:w-36 lg:hover:rounded-r-md px-2"
          >
            <div><FaLinkedinIn className="text-lg" /></div>
            <span className="ml-2 hidden lg:group-hover:inline font-bold uppercase tracking-wider">
              Linkedin
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/9440154950" target="_blank"
            className="group flex items-center bg-[#43e460] text-white w-9 h-9 transition-all duration-300 lg:hover:w-36 lg:hover:rounded-r-md px-2"
          >
            <div><MdOutlineWhatsapp className="text-xl" /></div>
            <span className="ml-2 hidden lg:group-hover:inline duration-500 font-bold uppercase tracking-wider">
              WhatsApp
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group flex items-center bg-red-600 text-white w-9 h-9 rounded-b-md transition-all duration-300 lg:hover:w-36 lg:hover:rounded-r-md px-2"
          >
            <div><FaYoutube className="text-xl" /></div>
            <span className="ml-2 hidden lg:group-hover:inline font-bold uppercase tracking-wider">
              Youtube
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FloatingIcons;
