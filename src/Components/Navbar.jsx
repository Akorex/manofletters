import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between pl-11 pr-12 pt-3">
        {/*Logo */}
        <div className="flex items-center font-bold text-2xl">
          <Link to="/">manofletters</Link>
        </div>
        {/*Navigation Links  */}
        <ul className="hidden flex-1 md:flex gap-4 text-gray-600 justify-end  font-semibold">
          <Link to="/writing">writing</Link>
          <Link to="/about">about</Link>
          <Link to="/photos">photos</Link>
          <Link to="/machine learning">machine learning</Link>
          <Link to="/blog">blog</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
