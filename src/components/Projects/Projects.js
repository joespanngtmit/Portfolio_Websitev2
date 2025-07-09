import React, { useState, useEffect } from "react";
import projects from "./projects.json";
import "./ProjectsSection.css";
import { BsGlobe, BsBoxes } from "react-icons/bs";
import { FaCode, FaUserDoctor } from "react-icons/fa6";
import { GiThink, GiOpenTreasureChest  } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { FaMoneyBill, FaFlagUsa, FaRibbon, FaCloudShowersHeavy  } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { CgGames, CgPokemon  } from "react-icons/cg";
import { MdQuiz, MdOutlinePassword  } from "react-icons/md";
import { FcPlanner } from "react-icons/fc";

// Helper function to split the array into chunks of a given size.
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const ProjectsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedProject, setExpandedProject] = useState(null);
  const rotations = [-21, 7, 25];
  const icons = [
    <BsGlobe />,
    <FaFlagUsa />,
    <FaUserDoctor />,
    <CgGames />,
    <FaMoneyBill />,
    <CgPokemon />,
    <SiHiveBlockchain />,
    <MdQuiz />,
    <MdOutlinePassword  />,
    <GiOpenTreasureChest />,
    <FaCloudShowersHeavy />,
    <FcPlanner />,
  ];
  const projectRows = chunkArray(projects, 3);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="projects-section">
      {isLoading ? (
        <div className="loading-container">
          <div className="bouncing-ball" />
        </div>
      ) : (
        <>
          <h2 className="projects-heading">Projects</h2>
          {projectRows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((project, index) => {
                const rotationValue = rotations[index] ?? 0;
                const icon = icons[rowIndex * 3 + index] ?? <GiThink />;
                const delay = (rowIndex * 3 + index) * 0.1; // Staggered delay
                const isExpanded = expandedProject === project.name;
                const handleCardClick = () => {
                  setExpandedProject(isExpanded ? null : project.name);
                };
                return (
                  <div
                    key={project.name + index}
                    className="glass"
                    data-text={project.name}
                    onClick={handleCardClick}
                    style={{
                      "--r": rotationValue,
                      "--delay": `${delay}s`,
                    }}
                  >
                    <div className="card-content">
                      {isExpanded ? (
                        <p className="project-description">
                          {project.description}
                        </p>
                      ) : (<h3 className="project-icon">{icon}</h3>)}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="code-icon-link"
                    >
                      <FaCode className="code-icon" />
                    </a>
                    {project.live_url && 
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="code-icon-live-link"
                    >
                      <GoArrowRight className="code-icon" />
                    </a>}
                    
                  </div>
                );
              })}
            </div>
          ))}
        </>
      )}
    </section>
  );
};

export default ProjectsSection;