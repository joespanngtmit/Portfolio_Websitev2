import React, { useEffect, useRef, useContext, useState } from 'react';
import "./AboutMe.css";
import profileDark from "../../assets/profile.jpg";
import profileLight from "../../assets/profile1.jpg";
import { ThemeContext } from "../ParticleBackground/ThemeContext";

const AboutMe = () => {
  const { isDarkTheme } = useContext(ThemeContext); // Access theme context
  const aboutMeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeContainer = aboutMeRef.current;
      const aboutMeContainerTop = aboutMeContainer.getBoundingClientRect().top;
      const aboutMeContainerBottom = aboutMeContainer.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (aboutMeContainerTop < windowHeight && aboutMeContainerBottom > 0) {
        // About Me section is in view, show elements
        setIsVisible(true);
      } else {
        // About Me section is not in view, hide elements
        setIsVisible(false);
      }
    };

    // Trigger animations when the component mounts
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ensure the content is only shown after the initial render is complete
    const timeoutId = setTimeout(() => {
      if (isVisible) {
        aboutMeRef.current.querySelectorAll('.about-me-title, .about-me-card, .about-me-introduction, .about-me-quote').forEach((element, index) => {
          if (element.classList.contains('about-me-title')) {
            element.style.animation = `slideDown 1.5s ease forwards`;
          } else if (element.classList.contains('about-me-card')) {
            element.style.animation = `slideUp 1.5s ease forwards`;
            element.style.animationDelay = `${index * 0.3}s`;
          } else if (element.classList.contains('about-me-introduction') || element.classList.contains('about-me-quote')) {
            element.style.animation = `fadeIn 1.5s ease forwards`;
            element.style.animationDelay = `${index * 0.3}s`;
          }
        });
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  return (
    <section className={`about-me-section ${isVisible ? 'visible' : ''}`} aria-labelledby="about-me-title" ref={aboutMeRef}>
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