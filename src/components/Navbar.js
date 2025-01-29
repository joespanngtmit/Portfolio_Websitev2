import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    navigate(`/${section}`);
  };

  return (
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
              href="/"
              onClick={() => handleNavClick("home")}
              className={activeSection === "home" ? "active" : ""}
              aria-label="Home section"
            >
              Home
            </a>
          </li>
          <li role="presentation">
            <a
              href="/about"
              onClick={() => handleNavClick("about")}
              className={activeSection === "about" ? "active" : ""}
              aria-label="About section"
            >
              About
            </a>
          </li>
          <li role="presentation">
            <a
              href="/skills"
              onClick={() => handleNavClick("skills")}
              className={activeSection === "skills" ? "active" : ""}
              aria-label="Skills section"
            >
              Skills
            </a>
          </li>
          <li role="presentation">
            <a
              href="/connect"
              onClick={() => handleNavClick("connect")}
              className={activeSection === "connect" ? "active" : ""}
              aria-label="Connect section"
            >
              Connect
            </a>
          </li>
        </ul>

        <label className="theme-switch" role="switch" aria-checked={!isDarkTheme}>
          <div className="slider-shadow"></div>
          <input
            type="checkbox"
            checked={!isDarkTheme}
            onChange={toggleTheme}
            aria-label="Toggle theme"
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;