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
          <Link to="/writing" className="hover:text-gray-950">
            writing
          </Link>
          <Link to="/about" className="hover:text-gray-950">
            about
          </Link>
          <Link to="/photos" className="hover:text-gray-950">
            photos
          </Link>
          <Link to="/machine learning" className="hover:text-gray-950">
            machine learning
          </Link>
          <Link to="/blog" className="hover:text-gray-950">
            blog
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
