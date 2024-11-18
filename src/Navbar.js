// Navbar.js
import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">D-Rescue</h1>
      <div className="navbar-icons">
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
