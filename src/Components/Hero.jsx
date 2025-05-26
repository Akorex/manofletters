import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/cover.png";

const imgLink =
  "https://res.cloudinary.com/dlttdopsg/image/upload/f_auto,q_auto,w_800/v1748290096/PXL_20250112_182656168_hms1w8.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-8 sm:py-10 gap-6 sm:gap-8">
      {/* Text Section */}
      <div className="text-left md:max-w-2xl ml-4 md:ml-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Hello, I'm Akorede Adewole.
          <br />
          <span>
            Software Engineer
            <span className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl">
              &nbsp;—&nbsp;
            </span>
            Backend & Machine Learning.
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-3xl text-gray-700">
          I explore the world through the lens of AI, Software, and Technology.
        </p>

        {/* More About Me Links */}
        <ul className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 hover:cursor-pointer font-mono space-y-2 sm:space-y-4 tracking-widest">
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
      <div className="w-full lg:w-1/3 flex justify-center mt-4 sm:mt-5">
        <div className="w-64 sm:w-80 md:w-96 lg:w-[28rem] aspect-square rounded-2xl overflow-hidden">
          <img
            src={imgLink}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
