import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/cover.png";

const Hero = () => {
  return (
    <div className="flex items-start">
      {/* Text Section */}
      <div className="pr-10">
        <h1 className="pb-10 pt-20 pl-32 font-medium text-7xl">
          I explore the world through the lens of AI, Software and Technology.
        </h1>
        {/* More About Me Links */}
        <ul className="pl-32 text-2xl text-gray-600 hover:cursor-pointer font-mono space-y-4 tracking-widest">
          <li>
            <Link to="/about">Get to know me</Link>
            <span className="ml-2">-&gt;</span>
          </li>
          <li>
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
          className="w-96 h-120 pt-28 pr-12 rounded-lg object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
