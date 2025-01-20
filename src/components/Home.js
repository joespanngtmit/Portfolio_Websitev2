import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import "../App.css"; // Global styles for the app
import "../components/Home.css"; // Home section specific styles

function Home() {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const textArray = ["Data Analyst", "Python Developer", "Photographer"];

  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    // Detect the system's preferred theme
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    // Apply the theme based on system preference
    if (prefersDarkMode.matches) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }

    // Listen for changes to the theme preference
    const themeChangeListener = (e) => {
      if (e.matches) {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
      } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
      }
    };

    prefersDarkMode.addEventListener("change", themeChangeListener);

    // Clean up the event listener when the component unmounts
    return () => {
      prefersDarkMode.removeEventListener("change", themeChangeListener);
    };
  }, []);

  useEffect(() => {
    if (charIndex < textArray[currentIndex].length) {
      const typingTimer = setTimeout(() => {
        setText((prevText) => prevText + textArray[currentIndex][charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 100);

      return () => clearTimeout(typingTimer);
    } else {
      const delayTimer = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 2000);

      return () => clearTimeout(delayTimer);
    }
  }, [charIndex, currentIndex, textArray]);

  return (
    <section
      id="home"
      className={`home-section ${homeInView ? "animate-in" : ""}`}
      ref={homeRef}
    >
      <div className="home-container">
        {/* Left Column for Text */}
        <div className="home-text">
          <p>Hello, I'm</p>
          <h1>Rohan Goyal</h1>
          <h2>
            And I'm a <span>{text}</span>
          </h2>
          <p className="last-paragraph">
            Hey, I’m Rohan Goyal — a Data Analyst uncovering stories in numbers,
            a Python Developer creating impactful solutions, and a Photographer
            capturing life’s essence. I blend data, code, and creativity to
            solve complex problems and create lasting memories.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon x-icon"
            >
              <FaXTwitter size={30} /> {/* X Twitter logo */}
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          <button
            className="home-text"
            onClick={() => (window.location.href = "/assets/resume.pdf")}
          >
            Download CV
          </button>
        </div>

        {/* Right Column for Profile Picture */}
        <div className="profile-container">
          <img
            src={require("../assets/profile.jpg")} // Correct path to profile image
            alt="Rohan Goyal"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
