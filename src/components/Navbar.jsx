// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    if (isMenuOpen) toggleMenu();
  };

  return (
    <div className="flex flex-col sticky top-0 bg-[#87CEEB] z-50">
      <header className="flex items-center justify-between gap-2 text-xl font-medium border-b border-black p-4">
        <div>
          <Link to="/">
            <h1>Amount Hub</h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle menu"
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="hidden md:flex gap-4">
            <Link to="/contact">Contact Us</Link>
            {isLoggedIn && (
              <a href="#logout" onClick={handleLogout}>
                Logout
              </a>
            )}
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-white p-4 border-t border-black">
          <Link to="/contact" className="py-2" onClick={toggleMenu}>
            Contact Us
          </Link>
          {isLoggedIn && (
            <a href="#logout" className="py-2" onClick={handleLogout}>
              Logout
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

