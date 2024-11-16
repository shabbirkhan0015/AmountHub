// components/Navbar.js
// components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100 p-4 flex justify-between items-center border-b shadow-md sticky top-0">
      <div className="logo font-bold text-xl tracking-wide">AMOUNT</div>
      <div className="profile flex items-center">
        <span className="mr-4 text-gray-600">Shabbir Khan</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-lg">
          Profile
        </button>
      </div>
    </div>
  );
};

export default Navbar;
