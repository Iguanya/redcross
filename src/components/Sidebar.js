import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SidebarLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

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
      <aside className={isSidebarVisible ? "sidebar" : "sidebar hidden"}>
        <div className="toggle">
          <div className="logo">
            <img src="logo2.png" alt="Logo" />
            <h2>D-Rescue</h2>
          </div>
          <button
            className="close-sidebar"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            ✖
          </button>
        </div>
        <div className="sidebar-links">
          <a href="/" className="active"><span className="icon">🏠</span> Dashboard</a>
          <a href="/emergency-management"><span className="icon">🚨</span> Emergency Management</a>
          <a href="/people-and-centers"><span className="icon">🏥</span> People & Centers</a>
          <a href="/settings"><span className="icon">⚙️</span> Settings</a>
          <a href="/logout"><span className="icon">🔒</span> Logout</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className={isSidebarVisible ? "main-content with-sidebar" : "main-content full-width"}>
        <h1>Welcome to D-Rescue</h1>
        <p>Manage and monitor your emergency response system effectively.</p>
        {/* Additional main content */}
      </main>
    </>
  );
};

export default SidebarLayout;
