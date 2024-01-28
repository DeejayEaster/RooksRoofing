// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-lg font-semibold mr-4">Home</Link>
          <Link to="/services" className="text-lg font-semibold mr-4">Services</Link>
          <Link to="/contact" className="text-lg font-semibold mr-4">Contact</Link>
          <Link to="/about" className="text-lg font-semibold">About</Link>
        </div>
        {/* Add additional components such as logo, user authentication, etc. */}
      </div>
    </nav>
  );
}

export default Navbar;
