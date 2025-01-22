import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setActiveSection, setThemeColor }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const newThemeColor = isDarkTheme ? "#333" : "#ffffff"; // Adjust as needed
    setThemeColor(newThemeColor);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <span className="rohan">Rohan</span>
          <span className="goyal">Goyal</span>
        </div>

        <div
          className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="#home" onClick={() => handleNavClick("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleNavClick("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleNavClick("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#connect" onClick={() => handleNavClick("connect")}>
              Connect
            </a>
          </li>
        </ul>

        {/* Slide Toggle Button for Theme Change */}
        <label className="theme-switch">
        <div className="slider-shadow"></div>
          <input
            type="checkbox"
            checked={isDarkTheme}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
