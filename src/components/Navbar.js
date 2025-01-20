import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);

    if (isDarkTheme) {
      document.documentElement.style.setProperty("--bg-color", "white");
      document.documentElement.style.setProperty("--text-color", "black");
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#0a0a0a");
      document.documentElement.style.setProperty("--text-color", "white");
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <span className="rohan">Rohan</span>
          <span className="goyal">Goyal</span>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
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
