// src/components/DarkModeToggle.js
import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and save preference in local storage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark-theme', !darkMode);
    localStorage.setItem('dark-mode', !darkMode);
  };

  // Load saved dark mode preference on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    setDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark-theme', savedDarkMode);
  }, []);

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? '🌞 Light Mode' : '🌜 Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
