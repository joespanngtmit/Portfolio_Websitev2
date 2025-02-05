import React from "react";
import projects from "./projects.json";
import "./ProjectsSection.css";
import { BsGlobe, BsBoxes } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { FaCalculator, FaCode } from "react-icons/fa6";
import { GiThink } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";

// Import additional icons from react-icons
import {
  FaCloudShowersHeavy,
  FaCar,
  FaClipboardCheck,
  FaGamepad,
  FaWpforms,
  FaRibbon,
} from "react-icons/fa";

// Helper function to split the array into chunks of a given size.
const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const ProjectsSection = () => {
  // Preset rotation values for the cards.
  const rotations = [-21, 7, 25];

  // Define an array of icon components that correspond to your projects.
  const icons = [
    <BsGlobe />,
    <FaCar />,
    <MdHomeWork />,
    <FaCalculator />,
    <GiThink />,
    <FaCloudShowersHeavy />,
    <SiGoogleanalytics />,
    <FaClipboardCheck />,
    <FaGamepad />,
    <FaWpforms />,
    <FaRibbon />,
    <BsBoxes />,
  ];

  // Group projects in chunks of 3.
  const projectRows = chunkArray(projects, 3);

  return (
    <section className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      {projectRows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((project, index) => {
            // Calculate the rotation value for this card.
            const rotationValue =
              rotations[index] !== undefined ? rotations[index] : 0;
            // Get the corresponding icon for this project based on overall index.
            const icon = icons[rowIndex * 3 + index] || <GiThink />;

            return (
              <div
                key={project.name + index}
                className="glass"
                data-text={project.name}
                style={{ "--r": rotationValue }}
              >
                <div className="card-content">
                  {/* Render the project icon (from your array) in an h3 tag */}
                  <h3 className="project-icon">{icon}</h3>
                </div>
                {/* 
                  The FaCode icon is now rendered in its own anchor.
                  It is absolutely positioned (see CSS) near the left border of the card.
                */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-icon-link"
                >
                  <FaCode className="code-icon" />
                </a>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
