import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default About;
