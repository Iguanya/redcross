import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside>
    <div className="toggle">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h2>D-Rescue</h2>
      </div>
    </div>
    <div className="sidebar">
      <Link to="/" className="active"><span className="icon">🏠</span> Dashboard</Link>
      <Link to="/emergency-management"><span className="icon">🚨</span> Emergency Management</Link>
      <Link to="/people-and-centers"><span className="icon">🏥</span> People & Centers</Link>
      <Link to="/settings"><span className="icon">⚙️</span> Settings</Link>
      <Link to="/login"><span className="icon">🔒</span> Logout</Link>
    </div>
  </aside>
);

export default Sidebar;
