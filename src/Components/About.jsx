import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle, SiUpwork } from "react-icons/si";
import Brilstack from "../assets/Brilstack.png";
import Hemify from "../assets/Hemify.png";
import iQube from "../assets/iqube.png";
import Airol from "../assets/Airol.jpg";

const BulletPoint = ({ color }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" className="mr-2">
    <circle cx="5" cy="5" r="4" fill={color} />
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
        <h1 className="pb-10 pt-6 pl-8 font-bold text-5xl">Experience</h1>

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
            name: "AiROL",
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
                className={`mr-1 ${
                  job.name === "Brilstack" ? "w-10 h-7" : "w-14 h-7"
                }`}
              />
              <h3 className="text-2xl font-bold">{job.name}</h3>
            </div>
            <div className="flex items-center mt-4 mb-4 space-x-8 pl-28">
              {/* Vertical Line with Bubbles */}
              <div className="relative flex flex-col items-center">
                <div className="h-32 w-2 bg-gray-300 relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-300 rounded-full"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="font-semibold leading-7">
                {job.points.map((point, i) => (
                  <div key={i} className="flex items-center">
                    <BulletPoint color="gray" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brands I've Worked With */}
      <div className="mt-16 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold  pb-2">Brands I've Worked With</h2>
        <div className="mt-14 space-y-20">
          <div className="flex space-x-48 justify-center font-semibold">
            <p>Hemify</p>
            <p>Brilstack</p>
            <p>iQube Labs</p>
          </div>

          {/* Airol with Arrow pointing to Logos */}
          <div className="flex items-center space-x-6 justify-center font-semibold">
            <p>AiROL</p>
            <span className="text-gray-600 text-3xl">→</span>
            <div className="flex space-x-8 justify-center items-center">
              <img
                src={Hemify}
                alt="Hemify Logo"
                className="w-24 h-12 object-contain"
              />
              <img
                src={Brilstack}
                alt="Brilstack Logo"
                className="w-24 h-12 object-contain"
              />
              <img
                src={iQube}
                alt="iQube Labs Logo"
                className="w-24 h-12 object-contain"
              />
              <img
                src={Airol}
                alt="Airol Logo"
                className="w-24 h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
