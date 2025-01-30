import React, { useEffect, useRef } from 'react';
import './Certifications.css';
import certificationsData from './certifications.json';

const Certifications = ({ limit }) => {
  const certificationsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const certificationsContainer = certificationsRef.current;
      const certifications = certificationsContainer.querySelectorAll('.certification-card');
      const heading = certificationsContainer.querySelector('.certifications-title');
      const certificationsContainerTop = certificationsContainer.getBoundingClientRect().top;
      const certificationsContainerBottom = certificationsContainer.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (certificationsContainerTop < windowHeight && certificationsContainerBottom > 0) {
        // Certifications and heading are in view, show them
        certifications.forEach((cert, index) => {
          cert.style.animation = `slideUp 1.5s ease forwards`;
          cert.style.animationDelay = `${index * 0.3}s`;
        });

        // Show the heading
        heading.style.animation = `slideDown 1.5s ease forwards`;
      } else {
        // Certifications and heading are not in view, hide them
        certifications.forEach((cert, index) => {
          cert.style.animation = `fadeOut 1.5s ease forwards`;
          cert.style.animationDelay = `${index * 0.3}s`;
        });

        // Hide the heading
        heading.style.animation = `fadeOut 1.5s ease forwards`;
      }
    };

    // Trigger animations when the component mounts
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="certifications-section" ref={certificationsRef}>
      <h2 className="certifications-title">My Certifications</h2>
      <div className="certifications-list">
        {certificationsData.slice(0, limit).map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-card-inner">
              {/* Front Side */}
              <div className="certification-card-front">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
              </div>

              {/* Back Side */}
              <div className="certification-card-back">
                <a href={`/certifications/${index}`} className="view-more-button">
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-button-container">
        <a href="/certifications" className="view-all-button">View All</a>
      </div>
    </div>
  );
};

export default Certifications;