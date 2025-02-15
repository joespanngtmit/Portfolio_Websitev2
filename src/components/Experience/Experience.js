import React, { useState, useEffect } from "react";
import "./Experience.css";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const experienceData = [
    {
      company: "Perficient Placements",
      position: "Data Analyst ",
      duration: "Apr 2024 - Present",
      description: [
        "Utilize statistical methods and data analysis to identify trends, patterns, and anomalies, improving business metrics accuracy by 20%. Leverage big data, cloud-based technologies, and visualization tools to convert raw data into actionable insights, boosting strategic decision-making efficiency by 30%.",
        "Develop 10+ clear, insightful reports and interactive dashboards monthly, simplifying complex datasets for stakeholders. Customize presentations for both technical and non-technical audiences, increasing data-driven decision adoption by 25%.",
        "Design, optimize, and refine 100+ SQL queries for efficient data extraction, manipulation, and analysis. Enhance query performance by 40%, ensuring seamless processing of large datasets and improving overall data integration and management.",
        "Automate and enhance ETL workflows, reducing manual processing time by 50%. Utilize AWS and Azure for scalable data solutions while staying updated on emerging trends in automation and big data processing, ensuring high-performance pipelines that enable real-time decision-making.",
      ],
    },
    {
      company: "Magna Infotech",
      position: "Data Analyst",
      duration: "Jan 2023 - Mar 2024",
      description: [
        "Executed data collection, cleaning, and preprocessing across 5+ data sources, ensuring 98% data accuracy, consistency, and integrity.",
        "Implemented quality assurance processes, enhancing data reliability for analysis and reporting by 30%.",
        "Performed exploratory data analysis (EDA) using Python (Pandas, NumPy, Matplotlib, Seaborn) and SQL, identifying 15+ key trends and patterns that informed strategic decisions. Applied mathematical and statistical techniques to enhance predictive modeling accuracy by 20%.",
        "Developed 10+ interactive dashboards and reports in Tableau, improving stakeholder decision-making efficiency by 25%. Optimized visualization processes, reducing dashboard load times by 40% for a better user experience.",
        "Collaborated in an Agile environment, contributing to 20+ sprint meetings, stand-ups, and discussions to enhance data workflows and reporting efficiency. Committed to continuous learning, implementing 5+ best practices in data optimization and management.",
      ],
    },
    {
      company: "DevTown",
      position: "Data Analyst Intern",
      duration: "Jun 2021 - Nov 2021",
      description: [
        "Gained hands-on experience in Python for data analysis, leveraging NumPy, Pandas, and Matplotlib/Seaborn to perform EDA and extract insights in finance and marketing datasets.",
        "Developed proficiency in SQLite and DB Browser, executing 50+ queries for efficient data extraction, ensuring 95%+ data accuracy and optimized storage.",
        "Applied statistical analysis and EDA using Scikit-learn and R, evaluating key performance indicators (KPIs) and supporting data-driven decision-making through predictive insights.",
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
