import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger icons

const Navbar = () => {
  const navItems = ["Home", "Services", "Projects", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain -my-2 transition duration-300 hover:scale-110"
          />
          <h1 className="text-2xl font-bold text-black">K2S Decor</h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 tracking-wide">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative group text-lg text-black"
            >
              <span className="inline-block transition duration-300 group-hover:scale-110 group-hover:text-yellow-500">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-black focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg border-t border-white/20 shadow-md">
          <div className="flex flex-col items-center py-4 gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // close menu on click
                className="text-xl font-semibold text-black hover:text-yellow-500 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;