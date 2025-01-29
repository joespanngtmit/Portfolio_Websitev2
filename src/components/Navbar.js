import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ParticleBackground from "./ParticlesBackground"; // Import your ParticleBackground component
import "./Navbar.css";

const Navbar = ({ setActiveSection }) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Access theme context
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const themeColor = isDarkTheme ? "#fff" : "#333"; // White for dark theme, dark gray for light theme

  return (
    <>
      {/* Pass themeColor to the ParticleBackground */}
      <ParticleBackground themeColor={themeColor} />

      <nav className={`navbar ${isDarkTheme ? "dark-navbar" : "light-navbar"}`}>
        <div className="navbar-content">
          <div className="logo">
            <span className="rohan">Rohan</span>
            <span className="goyal">Goyal</span>
          </div>

          <div
            className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            role="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleMenu();
              }
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul
            className={`nav-links ${isMenuOpen ? "show" : ""}`}
            role="navigation"
            aria-label="Main navigation"
          >
            <li role="presentation">
              <a
                href="#home"
                onClick={() => handleNavClick("home")}
                aria-label="Home section"
              >
                Home
              </a>
            </li>
            <li role="presentation">
              <a
                href="#about"
                onClick={() => handleNavClick("about")}
                aria-label="About section"
              >
                About
              </a>
            </li>
            <li role="presentation">
              <a
                href="#skills"
                onClick={() => handleNavClick("skills")}
                aria-label="Skills section"
              >
                Skills
              </a>
            </li>
            <li role="presentation">
              <a
                href="#connect"
                onClick={() => handleNavClick("connect")}
                aria-label="Connect section"
              >
                Connect
              </a>
            </li>
          </ul>

          {/* Slide Toggle Button for Theme Change */}
          <label className="theme-switch" role="switch" aria-checked={!isDarkTheme}>
            <div className="slider-shadow"></div>
            <input
              type="checkbox"
              checked={!isDarkTheme} // Checkbox reflects the opposite of isDarkTheme
              onChange={toggleTheme} // Toggle the theme when switched
              aria-label="Toggle theme"
            />
            <span className="slider"></span>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;