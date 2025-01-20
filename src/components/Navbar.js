import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    if (isDarkTheme) {
      // Light Mode
      document.documentElement.style.setProperty("--bg-color", "white");
      document.documentElement.style.setProperty("--text-color", "black");
      document.body.classList.add("light-theme"); // Add light-theme class to body
      document.body.classList.remove("dark-theme");
    } else {
      // Dark Mode
      document.documentElement.style.setProperty("--bg-color", "#0a0a0a");
      document.documentElement.style.setProperty("--text-color", "white");
      document.body.classList.add("dark-theme"); // Add dark-theme class to body
      document.body.classList.remove("light-theme");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* First column: Logo / Name */}
        <div className="logo">
          Rohan Goyal
        </div>

        {/* Second column: Nav links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="theme-switch" onClick={toggleTheme}>
          Switch Theme
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
