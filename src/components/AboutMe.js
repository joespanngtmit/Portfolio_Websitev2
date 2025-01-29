import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me-section" aria-labelledby="about-me-title">
      <div className="about-me-container">
        <h2 id="about-me-title" className="about-me-title">About Me</h2>
        <div className="about-me-card">
          <div className="about-me-profile-picture">
            <img src="profile.jpg" alt="Rohan Goyal" className="about-me-profile-image" />
          </div>
          <div className="about-me-content">
            <p className="about-me-introduction">
              I'm Rohan Goyal, a passionate Data Analyst with over 3 years of experience. I specialize in Python, SQL, and Data Visualization tools like Tableau and Power BI. My mission is to transform complex data into actionable insights and drive impactful decision-making.
            </p>
            <div className="about-me-key-details">
              <div className="about-me-detail-item">
                <h3 className="about-me-detail-title">Skills</h3>
                <ul className="about-me-detail-list">
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Tableau</li>
                  <li>Power BI</li>
                  <li>Excel</li>
                </ul>
              </div>
              <div className="about-me-detail-item">
                <h3 className="about-me-detail-title">Experience</h3>
                <ul className="about-me-detail-list">
                  <li>Data Analyst - 3 years</li>
                  <li>Python Developer - 2 years</li>
                </ul>
              </div>
              <div className="about-me-detail-item">
                <h3 className="about-me-detail-title">Personal Traits</h3>
                <ul className="about-me-detail-list">
                  <li>Creative</li>
                  <li>Tech-savvy</li>
                  <li>Analytical</li>
                </ul>
              </div>
            </div>
            <div className="about-me-cta-button">
              <a href="/resume.pdf" download className="about-me-download-resume">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;