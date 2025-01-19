import React from "react";

const About = () => {
  return (
    <div className="bg-[#fdf9f3] min-h-screen flex flex-col items-center px-6 py-12 md:px-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          About
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I'm a student from Vancouver, BC.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Inspired by nature since seeing a wild Snowy Owl in 2012, I'm a
          naturalist and wildlife
          <i> saba</i> photographer. Naturally, as someone passionate about
          nature, I engage in local climate activism and raise awareness through
          art and photography, as well as a
          <a href="#" className="text-blue-600 underline">
            {" "}
            mobile game{" "}
          </a>
          I am helping develop.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I have recently been spending most of my time doing mathematics and
          computer science, which you can explore on this site.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          You can contact me at
          <a
            href="mailto:adewoleakorede8@gmail.com"
            className="text-blue-600 underline"
          >
            {" "}
          </a>
          to receive updates every two months on what I'm doing, sign up for
          <a href="#" className="text-blue-600 underline">
            {" "}
            my newsletter.{" "}
          </a>
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mt-6">
          Follow me on
          <a href="#" className="text-blue-600 underline mx-1">
            {" "}
            medium,{" "}
          </a>
          <a href="#" className="text-blue-600 underline mx-1">
            {" "}
            instagram,{" "}
          </a>
          <a href="#" className="text-blue-600 underline mx-1">
            {" "}
            twitter.{" "}
          </a>
          View my code on
          <a href="#" className="text-blue-600 underline mx-1">
            {" "}
            GitHub.{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
