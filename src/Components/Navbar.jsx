import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between pl-11 pr-12 pt-6">
        {/*Logo */}
        <div className="flex items-center font-extrabold text-2xl">
          <h1>ManofLetters</h1>
        </div>
        {/*Navigation Links  */}
        <ul className="hidden flex-1 md:flex gap-4 text-gray-600 justify-end  font-semibold">
          <li>find the bird</li>
          <li>writing</li>
          <li>about</li>
          <li>photos</li>
          <li>machine learning</li>
          <li>blog</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
