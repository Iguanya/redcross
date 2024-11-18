// src/components/Header.js
import React from 'react';
import DarkModeToggle from './components/DarkModeToggle';

const Header = () => (
  <div className="right-section">
    <div className="nav">
      <DarkModeToggle />
      <div className="profile">
        <p>Hey, <b>Admin</b></p>
        <div className="profile-photo">
          <img src="profile.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
