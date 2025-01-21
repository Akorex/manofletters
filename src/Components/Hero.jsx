import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/cover.png";

const Hero = () => {
  return (
    <div className="flex items-center md:items-start p-6 md:p-16 flex-col-reverse md:flex-row ">
      {/* Text Section */}
      <div className="text-center md:text-left md:pr-10">
        <h1 className="pb-10 pt-6 pl-20 font-medium text-6xl">
          I explore the world <br />
          through the lens of AI, Software and Technology.
        </h1>
        {/* More About Me Links */}
        <ul className="pl-20 text-xl md:text-2xl text-gray-600 hover:cursor-pointer font-mono space-y-4 tracking-widest">
          <li className="hover:text-gray-800">
            <Link to="/about">Get to know me</Link>
            <span className="ml-2">-&gt;</span>
          </li>
          <li className="hover:text-gray-800">
            <Link to="/newsletter">Follow my newsletter</Link>
            <span className="ml-2">-&gt;</span>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="Cover"
          className="w-96 h-120 pt-6 pr-12 rounded-lg object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
