import React, { useContext } from "react";
import "./AboutMe.css";
import profileDark from "../assets/profile.jpg";
import profileLight from "../assets/profile1.jpg";
import { ThemeContext } from "../components/ThemeContext";

const AboutMe = () => {
  const { isDarkTheme } = useContext(ThemeContext); // Access theme context

  return (
    <section className="about-me-section" aria-labelledby="about-me-title">
      <div className="about-me-container">
        <h2 id="about-me-title" className="about-me-title">
          👋 About Me
        </h2>
        <div className="about-me-card">
          <div className="about-me-profile-picture">
            <img
              src={isDarkTheme ? profileDark : profileLight} // Dynamic profile picture based on theme
              alt="Rohan Goyal"
              className="about-me-profile-image"
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
          <div className="about-me-content">
            <p className="about-me-introduction">
              Hey there! I'm Rohan Goyal, a passionate Data Analyst with over 3
              years of experience. 📊 I love diving into complex data and
              uncovering hidden insights that drive impactful decisions. 🚀
            </p>
            <p className="about-me-introduction">
              When I'm not crunching numbers, you can find me behind the camera,
              capturing life's moments through my lens. 📸 I'm also a big fan of
              hitting the open road on my bike, feeling the wind in my hair, and
              exploring new places. 🚴‍♂️
            </p>
            <p className="about-me-introduction">
              I believe in blending creativity with technical expertise to solve
              complex problems and create lasting memories. 🎨💡 My mission is
              to keep growing, learning, and making a meaningful impact, both in
              my professional and personal life.
            </p>
            <blockquote className="about-me-quote">
              "The journey of a thousand miles begins with one step." - Lao Tzu
            </blockquote>
            <div className="about-me-cta-button">
              <a
                href="/resume.pdf"
                download
                className="about-me-download-resume"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                aria-label="Download Rohan Goyal's Resume"
              >
                Download Resume 📝
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
