import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import skillsData from "../Skills/Skills.json";
import Certifications from "../Certification/Certifications";

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsContainer = skillsRef.current;
      const skillsContainerTop = skillsContainer.getBoundingClientRect().top;
      const skillsContainerBottom = skillsContainer.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (skillsContainerTop < windowHeight && skillsContainerBottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSkillClick = (skill) => {
    if (expandedSkill === skill) {
      setIsAnimating(true);
      setTimeout(() => {
        setExpandedSkill(null);
        setIsAnimating(false);
      }, 500);
    } else {
      if (expandedSkill) {
        setIsAnimating(true);
        setTimeout(() => {
          setExpandedSkill(skill);
          setIsAnimating(false);
        }, 500);
      } else {
        setExpandedSkill(skill);
      }
    }
  };

  return (
    <div className={`hierarchy ${isVisible ? "visible" : ""}`} ref={skillsRef}>
      <h2 className="skills-title">My Skills</h2>
      <div className="managers">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="node manager"
            onClick={() => handleSkillClick(skill.name)}
          >
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
      {expandedSkill && (
        <div className={`sub-managers ${isAnimating ? "hidden" : "visible"}`}>
          {/* First 6 sub-skills go into the sub-managers container */}
          {skillsData
            .find((skill) => skill.name === expandedSkill)
            ?.subSkills.slice(0, 6)
            .map((subSkill, subIndex) => (
              <div key={subIndex} className="node sub-node">
                <h4>{subSkill}</h4>
              </div>
            ))}

          {/* For small screens only, extra sub-skills (sub sub branches) are rendered here */}
          {skillsData
            .find((skill) => skill.name === expandedSkill)
            ?.subSkills.slice(6).length > 0 && (
            <div className="sub-sub-managers">
              {skillsData
                .find((skill) => skill.name === expandedSkill)
                ?.subSkills.slice(6)
                .map((subSkill, subIndex) => (
                  <div key={subIndex} className="node sub-sub-node">
                    <h4>{subSkill}</h4>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
      <Certifications limit={6} />
    </div>
  );
};

export default Skills;
