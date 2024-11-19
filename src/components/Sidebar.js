import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>

          {/* Sidebar Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`sidebar ${isSidebarVisible ? "visible" : "hidden"}`}
        aria-hidden={!isSidebarVisible}
      >
        <div className="toggle">
        <div className="logo">
          <img src="logo2.png" alt="D-Rescue Logo" className="logo-img" />
          <h2 className="logo-text">D-Rescue</h2>
        </div>
        </div>
        <div className="sidebar-links">
          <Link to="/" className="active">
            <span className="icon">🏠</span> Dashboard
          </Link>
          <Link to="/emergency-management">
            <span className="icon">🚨</span> Emergency Management
          </Link>
          <Link to="/people-and-centers">
            <span className="icon">🏥</span> People & Centers
          </Link>
          <Link to="/settings">
            <span className="icon">⚙️</span> Settings
          </Link>
          <Link to="/login">
            <span className="icon">🔒</span> Logout
          </Link>
        </div>
      </aside>

      {/* Top Navbar for Smaller Devices */}
      <nav className="mobile-navbar">
        <Link to="/" className="mobile-link">
          <span className="icon">🏠</span>
        </Link>
        <Link to="/emergency-management" className="mobile-link">
          <span className="icon">🚨</span>
        </Link>
        <Link to="/people-and-centers" className="mobile-link">
          <span className="icon">🏥</span>
        </Link>
        <Link to="/settings" className="mobile-link">
          <span className="icon">⚙️</span>
        </Link>
        <Link to="/login" className="mobile-link">
          <span className="icon">🔒</span>
        </Link>
      </nav>
    </>
  );
};

export default Sidebar;
