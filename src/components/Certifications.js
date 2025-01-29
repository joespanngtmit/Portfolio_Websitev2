import React from "react";
import "./Certifications.css";
import certificationsData from "./certifications.json";

const Certifications = ({ limit }) => {
  return (
    <div className="certifications-section">
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
