import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between pl-11 pr-12 pt-3">
        {/* Logo */}
        <div className="flex items-center font-bold text-2xl">
          <Link to="/">manofletters</Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-4 text-gray-600 justify-end font-semibold">
          <Link to="/writing" className="hover:text-gray-950">
            writing
          </Link>
          <Link to="/about" className="hover:text-gray-950">
            about
          </Link>
          <Link to="/photos" className="hover:text-gray-950">
            photos
          </Link>
          <Link to="/machine-learning" className="hover:text-gray-950">
            machine learning
          </Link>
          <Link to="/blog" className="hover:text-gray-950">
            blog
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-bgcolor p-4">
          <ul className="flex flex-col gap-3 text-gray-600 font-semibold">
            <Link
              to="/writing"
              className="hover:text-gray-950"
              onClick={toggleMenu}
            >
              writing
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-950"
              onClick={toggleMenu}
            >
              about
            </Link>
            <Link
              to="/photos"
              className="hover:text-gray-950"
              onClick={toggleMenu}
            >
              photos
            </Link>
            <Link
              to="/machine-learning"
              className="hover:text-gray-950"
              onClick={toggleMenu}
            >
              machine learning
            </Link>
            <Link
              to="/blog"
              className="hover:text-gray-950"
              onClick={toggleMenu}
            >
              blog
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
``;
