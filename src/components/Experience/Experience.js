import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const experienceData = [
    {
      company: 'DevTown',
      position: 'Data Analyst Intern',
      duration: 'Jul 2021 - Oct 2021',
      description: [
        'Acquired proficiency in Python for data analysis and machine learning, developing algorithms and working with libraries such as NumPy for numerical computing, Pandas for data manipulation, Matplotlib for data visualization, and Seaborn for statistical graphics.',
        'Gained practical experience in managing relational databases with SQLite and Db Browser, integrating machine learning algorithms for effective data storage, retrieval, and management in a collaborative environment.',
        'Developed hands-on expertise in statistical analysis, exploratory data analysis, and machine learning, utilizing tools like Scikit-learn in Python and the R programming language for algorithm development and testing.'
      ],
    },
    {
        company: 'Capabl (from Elite Techno Groups)',
        position: 'Python for AI/ML Intern',
        duration: 'Aug 2021 - Sept 2021',
        description: [
          'Proficient in Python and its associated modules, I applied them effectively across various projects involving algorithm development and exploratory data analysis, including machine learning applications.',
          'Utilized JSON for data manipulation, integration, and script writing within an inventory management project, ensuring efficient data exchange and facilitating machine learning model integration.',
          'Experienced with key Python libraries, including NumPy for numerical analysis, Pandas for data manipulation, Matplotlib for data visualization, and Seaborn for statistical graphics, which contributed to comprehensive algorithm and machine learning model development.',
          'Gained practical insights into the AI/ML domain through hands-on experience with relevant tools and techniques, enhancing learning solutions and testing in a collaborative environment focused on machine learning applications.'
        ],
      },
      {
        company: 'EntryLevel',
        position: 'Data Analyst Virtual Experience',
        duration: 'Jul 2021 - Aug 2021',
        description: [
          'Acquired skills in identifying and analyzing business problems effectively',
          'Mastered various data cleaning techniques using Google Sheets to ensure data accuracy and consistency.',
          'Developed expertise in creating Pivot Tables to extract and present key insights from datasets.',
          'Gained proficiency in Tableau’s basic functionalities and utilized it to design impactful data visualizations.',
          'Earned three badges: Critical Thinker, Team Player, and Last-Minute Hustle, recognizing achievements in analytical thinking, teamwork, and performance under tight deadlines.'
        ],
      },
      
    // other experience items...
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
                <button className="view-more-button" onClick={() => setSelectedExperience(exp)}>
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Detailed View */}
      {selectedExperience && (
        <div className={`experience-modal ${showModal ? 'active' : ''}`} onClick={closeModal}>
          <div className="experience-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            
            <div className="header">
              <h2>{selectedExperience.company}</h2>
              <div className="duration">{selectedExperience.duration}</div>
            </div>

            <h3>{selectedExperience.position}</h3>
            <ul>
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
