import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/cover.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
      {/* Text Section */}
      <div className="text-center md:text-left md:max-w-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight">
          Hello, I'm Akorede Adewole
          <br />
          <span className="block">Software Engineer</span>
          <span className="font-extrabold text-xl sm:text-2xl">
            &nbsp;—&nbsp;
          </span>
          Backend & Machine Learning.
        </h1>

        <p className="mt-6 text-lg sm:text-2xl text-gray-700">
          I explore the world through the lens of AI, Software, and Technology.
        </p>

        {/* More About Me Links */}
        <ul className="mt-6 text-lg sm:text-xl text-gray-600 hover:cursor-pointer font-mono space-y-4 tracking-widest">
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
      <div className="mt-10 md:mt-0 flex-shrink-0">
        <img
          src={image}
          alt="Cover"
          className="w-64 sm:w-80 md:w-96 lg:w-[450px] rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
