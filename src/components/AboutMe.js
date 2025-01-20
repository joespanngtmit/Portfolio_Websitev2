import React from 'react';
import '../components/AboutMe.css';

function About() {
  return (
    <section className="about-section">
      {/* Left Column - Profile Image */}
      <div className="about-left">
        <img
          src="profile.jpg"
          alt="Rohan Goyal"
          className="profile-image"
        />
      </div>

      {/* Right Column - Content */}
      <div className="about-right">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I'm Rohan Goyal, a passionate Data Analyst with over 3 years of experience. I specialize in Python, SQL, and Data Visualization tools like Tableau and Power BI. My mission is to transform complex data into actionable insights and drive impactful decision-making.
        </p>

        {/* Skills Section */}
        <div className="skills">
          <span className="skill-badge">Python</span>
          <span className="skill-badge">SQL</span>
          <span className="skill-badge">Tableau</span>
          <span className="skill-badge">Power BI</span>
          <span className="skill-badge">Excel</span>
          <span className="skill-badge">Data Cleaning</span>
          <span className="skill-badge">Machine Learning</span>
        </div>

        {/* Call-to-Action Button */}
        <div style={{ marginTop: '30px' }}>
          <a href="/resume.pdf" download className="cta-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
