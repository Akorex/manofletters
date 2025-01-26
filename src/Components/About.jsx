import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle, SiUpwork } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-[#fdf9f3] min-h-screen flex flex-col px-6 py-12 md:px-24">
      {/* Header */}
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 pl-8 pt-12">
          About
        </h1>
      </div>

      {/* Introduction */}
      <div className="pb-10 pt-3 pl-8 text-4xl">
        <p>Hello, I'm Akorede Adewole.</p>
        <p>Software Engineer</p>
      </div>

      {/* Social Links */}
      <div className="pl-8 flex gap-6 items-center text-3xl text-gray-700">
        <a
          href="https://github.com/Akorex"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/adewole-akorede/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        {/* Kaggle Icon */}
        <a
          href="https://www.kaggle.com/adewoleakorede"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <SiKaggle />
        </a>

        {/* Upwork Icon */}
        <a
          href="https://www.upwork.com/freelancers/~01c049794509934df1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors duration-200"
        >
          <SiUpwork />
        </a>
      </div>
    </div>
  );
};

export default About;
