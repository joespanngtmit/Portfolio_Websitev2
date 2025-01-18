import React, { useEffect } from "react";
import "../App.css";

function About() {
  useEffect(() => {
    // Disable scroll when hovering over the section
    const disableScroll = () => {
      document.body.style.overflow = 'hidden'; // Disable scroll
    };

    // Enable scroll when exiting the section
    const enableScroll = () => {
      document.body.style.overflow = 'auto'; // Enable scroll
    };

    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('mouseenter', disableScroll);
    aboutSection.addEventListener('mouseleave', enableScroll);

    // Cleanup the event listeners
    return () => {
      aboutSection.removeEventListener('mouseenter', disableScroll);
      aboutSection.removeEventListener('mouseleave', enableScroll);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="card-container">
        <h2>About Me</h2>
        <p>
          Hello! I'm Rohan Goyal, a passionate tech enthusiast with a BCA degree
          in Data Science from Poornima University. My journey is fueled by a
          love for data-driven problem-solving and creating impactful solutions
          in the ever-evolving world of technology.
        </p>
        <ul>
          <li>
            <span role="img" aria-label="rocket">🚀</span> Technical Expertise: Python, SQL, Java, Machine Learning
          </li>
          <li>
            <span role="img" aria-label="chart with upwards trend">📊</span> Data Insights: Skilled in data visualization with tools like Matplotlib and Seaborn
          </li>
          <li>
            <span role="img" aria-label="globe">🌐</span> Web Development: Building user-friendly web applications
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
