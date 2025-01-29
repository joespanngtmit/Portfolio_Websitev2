import React from 'react';
import '../components/AboutMe.css';

function About() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      {/* Left Column - Profile Image */}
      <div className="about-left">
        <img
          src="profile.jpg"
          alt="Rohan Goyal"
          className="profile-image"
          role="img"
          aria-label="Profile picture of Rohan Goyal"
        />
      </div>

      {/* Right Column - Content */}
      <div className="about-right">
        <h2 className="about-title" id="about-title">
          About Me
        </h2>
        <p className="about-description">
          I'm Rohan Goyal, a passionate Data Analyst with over 3 years of experience. I specialize in Python, SQL, and Data Visualization tools like Tableau and Power BI. My mission is to transform complex data into actionable insights and drive impactful decision-making.
        </p>

        {/* Skills Section */}
        <div className="skills" aria-labelledby="skills-label">
          <span className="skill-badge" role="button" aria-label="Python skill badge">
            Python
          </span>
          <span className="skill-badge" role="button" aria-label="SQL skill badge">
            SQL
          </span>
          <span className="skill-badge" role="button" aria-label="Tableau skill badge">
            Tableau
          </span>
          <span className="skill-badge" role="button" aria-label="Power BI skill badge">
            Power BI
          </span>
          <span className="skill-badge" role="button" aria-label="Excel skill badge">
            Excel
          </span>
          <span className="skill-badge" role="button" aria-label="Data Cleaning skill badge">
            Data Cleaning
          </span>
          <span className="skill-badge" role="button" aria-label="Machine Learning skill badge">
            Machine Learning
          </span>
        </div>

        {/* Call-to-Action Button */}
        <div style={{ marginTop: '30px' }}>
          <a
            href="/resume.pdf"
            download
            className="cta-button"
            role="button"
            aria-label="Download Rohan Goyal's resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;