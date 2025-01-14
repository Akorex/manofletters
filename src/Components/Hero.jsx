import React from "react";
import image from "../assets/cover.png";
const Hero = () => {
  return (
    <div>
      {/*texts*/}
      <h1 className=" pb-10 pt-20 pl-32 pr-96 font-medium text-7xl">
        I explore the intersection of nature and technology
      </h1>
      {/*More About Me Links */}
      <ul>
        <li>
          <a href="#">Get to know me</a>
        </li>
        <li>
          <a href="#">Follow my Newsletter</a>{" "}
        </li>
      </ul>
      {/*Image */}
      <img src={image} alt="" />
    </div>
  );
};

export default Hero;
