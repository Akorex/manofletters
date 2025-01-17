import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between pl-11 pr-12 pt-3">
        {/*Logo */}
        <div className="flex items-center font-bold text-2xl">
          <h1>manofletters</h1>
        </div>
        {/*Navigation Links  */}
        <ul className="hidden flex-1 md:flex gap-4 text-gray-600 justify-end  font-semibold">
          <a href="#">
            {" "}
            <li>writing</li>
          </a>
          <a href="#">
            {" "}
            <li>about</li>
          </a>
          <a href="#">
            {" "}
            <li>about</li>
          </a>

          <a href="#">
            {" "}
            <li>photos</li>
          </a>
          <a href="#">
            {" "}
            <li>machine learning</li>
          </a>

          <a href="#">
            {" "}
            <li>blog</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
