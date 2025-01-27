import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle, SiUpwork } from "react-icons/si";
import Brilstack from "../assets/Brilstack.png";
import Hemify from "../assets/Hemify.png";
import iQube from "../assets/iqube.png";
import Airol from "../assets/Airol.jpg";

const About = () => {
  return (
    <div className="bg-bgcolor min-h-screen flex flex-col px-6 py-12 md:px-24">
      {/* Header */}
      <div className="max-w-4xl">
        <h1 className="pb-10 pt-6 pl-8 font-bold text-5xl ">About</h1>
      </div>

      {/* Introduction */}
      <div className="pb-10 pt-3 pl-8 text-4xl">
        <p>Hello, I'm Akorede Adewole.</p>
        <p>Software Engineer</p>
      </div>

      {/* Social Links */}
      <div className="pl-8 flex gap-6 items-center text-3xl text-gray-700">
        {/* Github Icon */}
        <a
          href="https://github.com/Akorex"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-200"
        >
          <FaGithub />
        </a>
        {/*  LinkedIn Icon */}
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
      {/* Experience */}
      <div className="pt-10">
        <h1 className="pb-10 pt-6 pl-20 font-bold text-5xl ">Experience</h1>
        <div className="flex items-center ">
          <div className="flex items-center space-x-4">
            <img
              src={Brilstack}
              alt="Brilstack Logo"
              className="w-32 h-12 mr-52"
            />
            <h3 className="text-2xl font-bold">Brilstack</h3>
          </div>
        </div>
      </div>
      {/* Vertical Line */}
      <div className="h-40 w-px bg-gray-950 ml-96"></div>
    </div>
  );
};

export default About;
