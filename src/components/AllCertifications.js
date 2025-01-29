import React from 'react';
import './Certifications.css';
import certificationsData from './certifications.json'; // Adjust the path based on your project structure

const AllCertifications = () => {
  return (
    <div className="certifications-section">
      <h2 className="certifications-title">All Certifications</h2>
      <div className="certifications-list">
        {certificationsData.map((cert, index) => (
          <div key={index} className="certification-card">
            <div className="certification-card-inner">
              <div className="certification-card-front">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
              </div>
              <div className="certification-card-back">
                <a href={`/certifications/${index}`} className="view-more-button">View Certificate</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCertifications;
