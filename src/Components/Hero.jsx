import React from "react";
import image from "../assets/cover.png";

const Hero = () => {
  return (
    <div className="flex items-start">
      {/* Text Section */}
      <div className="pr-10">
        <h1 className="pb-10 pt-20 pl-32 font-medium text-7xl">
          I explore the intersection of nature and technology
        </h1>
        {/* More About Me Links */}
        <ul className="pl-32 text-2xl text-gray-600 hover:cursor-pointer font-mono space-y-4 tracking-widest">
          <li>
            <a href="#">Get to know me</a>
            <span className="ml-2">-&gt;</span>
          </li>
          <li>
            <a href="#">Follow my newsletter</a>
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
