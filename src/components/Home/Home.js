import React, { useState, useEffect, useContext, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import "../../App.css"; // Global styles for the app
import "../Home/Home.css"; // Home section-specific styles
import ParticleBackground from "../ParticleBackground/ParticlesBackground";

// Import ThemeContext
import { ThemeContext } from "../ParticleBackground/ThemeContext";

function Home() {
  const navigate = useNavigate();
  const { isDarkTheme } = useContext(ThemeContext); // Access theme context
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const textArray = useMemo(
    () => ["Full Stack Developer", "Python Developer", "React Developer", "Nak Muay"],
    []
  );

  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Effect to handle the initial loading animation
  useEffect(() => {
    document.body.classList.add("loading");
    setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
      document.body.classList.remove("loading");
    }, 3000); // Adjust this based on your loading animation duration
  }, []);

  // Typing effect for the text array
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

  // Determine the theme color based on the current theme
  const themeColor = isDarkTheme ? "#ffffff" : "#000000";

  return (
    <section
      id="home"
      className={`home-section ${homeInView ? "animate-in" : ""}`}
      ref={homeRef}
      aria-labelledby="home-title"
    >
      {/* Particle Background */}
      <ParticleBackground themeColor={themeColor} />

      {/* Centralized Text Content */}
      <div className="home-content">
        {/* Loading Animation */}
        {isLoading && (
          <div className={`loader-ball ${isLoaded ? "expand" : ""}`}></div>
        )}

        <div
          className={`home-text ${isLoaded ? "content-visible" : "hidden-content"}`}
        >
          <p>Hello, I'm</p>
          <h1 id="home-title">Joseph Spann<span>.</span> </h1>
          <h2>
            <span>{text}</span>
          </h2>

          <button
            className="home-text"
            onClick={() => navigate("/about")}
            aria-label="Navigate to About section"
          >
            Let's Connect
          </button>
        </div>
      </div>

      {/* Social Icons at the Bottom */}
      <div className="social-icons" aria-label="Social media links">
        <a
          href="https://github.com/joespanngtmit"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
          aria-label="GitHub profile"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-spann-12a684140/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
}

export default Home;