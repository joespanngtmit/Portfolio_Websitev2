import React, { useState, useEffect } from "react";
import "./Experience.css";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const experienceData = [
    {
      company: "Global TekMed Holdings LLC",
      position: "Lead Full Stack Developer",
      duration: "Jul 2022 - Present",
      description: [
        "Migrated a legacy application to React, improving page load times by 50%, enhancing user satisfaction, and increasing customer retention rates by 20%",
        "Designed and implemented a robust API architecture, facilitating seamless communication between front-end and back-end systems, increasing data throughput by 40% and decreasing response time by 60%.",
        "Managed source control using Git and Azure, enforcing branching/merging strategies that reduced code conflicts by 70%, improving team productivity.",
        "Defined and translated complex user requirements into clear project designs and development plans, delivering projects 15% ahead of schedule and within budget/designs and implementation plans.",
      ],
    },
    {
      company: "Microsoft.com",
      position: "IT Consultant/ Technical Support",
      duration: "Oct 2021 - Jun 2022",
      description: [
        "Led the transition from G-Suite to Microsoft systems for 35 employees, ensuring a 100% migration success rate and reducing downtime to less than 2 hours during the process.",
        "Developed and maintained client relationships by providing ongoing IT support, resulting in a 20% increase in customer retention and a 10% boost in positive client feedback.",
        "Managed access and permissions for over 35 employees within the production stack, reducing security breaches by 30% and ensuring compliance with company policies.",
        "Supported IT department in rolling out new technology and performing maintenance, reducing system downtime by 20% and increasing overall team efficiency by 25%. ",
        "Collaborated in an Agile environment, stand-ups, and discussions to enhance data workflows and reporting efficiency. Committed to continuous learning, implementing best practices in data optimization and management.",
      ],
    },
    {
      company: "TakeLessons.com",
      position: "Technical/Customer Support, IT Administration",
      duration: "Aug 2012 - Oct 2021",
      description: [
        "Supported IT department in rolling out new technology and performing maintenance, reducing system downtime by 20% and increasing overall team efficiency by 25%. ",
        "Exhibited professionalism and high energy in over 200 client interactions per month, contributing to a 12% boost in positive client feedback.",
        "Delivered efficient and courteous service, maintaining a 98% customer satisfaction rating across all interactions. ",
        "Focused on continuous learning and staying updated with industry trends, leading to a 15% improvement in personal performance and skill development."
      ],
    },
  ];

  useEffect(() => {
    if (selectedExperience) {
      setTimeout(() => setShowModal(true), 50);
    } else {
      setShowModal(false);
    }
  }, [selectedExperience]);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedExperience(null), 400);
  };

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-card-inner">
              <div className="experience-card-front">
                <h3 className="company-name">{exp.company}</h3>
                <h4 className="position-name">{exp.position}</h4>
                <p className="experience-description">{exp.duration}</p>
              </div>
              <div className="experience-card-back">
                <button
                  className="view-more-button"
                  onClick={() => setSelectedExperience(exp)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Detailed View */}
      {selectedExperience && (
        <div
          className={`experience-modal ${showModal ? "active" : ""}`}
          onClick={closeModal}
        >
          <div
            className="experience-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeModal}>
              ×
            </button>

            <div className="header">
              <h2>{selectedExperience.company}</h2>
              <div className="duration">{selectedExperience.duration}</div>
            </div>

            <h3>{selectedExperience.position}</h3>

            {/* Display description as bullet points */}
            <ul className="experience-points">
              {selectedExperience.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
