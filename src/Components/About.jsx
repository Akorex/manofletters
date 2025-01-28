import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle, SiUpwork } from "react-icons/si";
import Brilstack from "../assets/Brilstack.png";
import Hemify from "../assets/Hemify.png";
import iQube from "../assets/iqube.png";
import Airol from "../assets/Airol.jpg";

const BulletPoint = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" className="mr-2">
    <circle cx="5" cy="5" r="4" fill="black" />
  </svg>
);

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
        <a
          href="https://www.kaggle.com/adewoleakorede"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <SiKaggle />
        </a>
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
        <h1 className="pb-10 pt-6 pl-8 font-bold text-5xl underline">
          Experience
        </h1>

        {[
          {
            name: "Brilstack",
            logo: Brilstack,
            points: [
              "Designed and implemented a scalable employee payroll system.",
              "Engineered and managed a robust wallet system.",
              "Led the migration of critical data.",
            ],
          },
          {
            name: "Hemify",
            logo: Hemify,
            points: [
              "Orchestrated backend development for a platform which allows users to stake future events.",
              "Developed REST APIs, managed database migration, and maintained API documentation.",
              "Facilitated user interactions with APIs through debugging, testing endpoints, and performing code reviews.",
            ],
          },
          {
            name: "iQube Labs",
            logo: iQube,
            points: [
              "Built a generative language models corpus created in-house.",
              "Developed a Trello API Clone focusing on authentication, Google OAuth, and CRUD operations.",
              "Collaborated with the front-end team to implement new features and resolve bugs.",
            ],
          },
          {
            name: "Airol",
            logo: Airol,
            points: [
              "Collaborated on an identity door lock system using facial recognition (OpenCV).",
              "Worked with Arduino microcontrollers and built simple ML models for them.",
            ],
          },
        ].map((job, index) => (
          <div key={index}>
            <div className="flex items-center pl-8">
              <img
                src={job.logo}
                alt={`${job.name} Logo`}
                className="w-14 h-7 mr-20"
              />
              <h3 className="text-2xl font-bold">{job.name}</h3>
            </div>
            <div className="flex items-center mt-0 space-x-8 pl-48">
              {/* Vertical Line with Bubbles */}
              <div className="flex flex-col items-center">
                {/* Top Bubble */}
                <div className="w-4 h-4 bg-gray-500 rounded-full mb-1"></div>

                {/* Main Vertical Line */}
                <div className="w-2 bg-gray-500 h-32 rounded-md"></div>

                {/* Bottom Bubble */}
                <div className="w-4 h-4 bg-gray-500 rounded-full mt-1"></div>
              </div>

              <div className="font-semibold leading-7">
                {job.points.map((point, i) => (
                  <div key={i} className="flex items-center">
                    <BulletPoint />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
