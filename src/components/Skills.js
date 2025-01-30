import React, { useState } from 'react';
import './Skills.css';
import skillsData from '../components/Skills.json';
import Certifications from './Certifications';

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

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
    <div className="hierarchy">
      <div className="node ceo">
        <h2>My Skills</h2>
      </div>
      <div className="managers">
        {skillsData.map((skill, index) => (
          <div key={index} className="node manager" onClick={() => handleSkillClick(skill.name)}>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
      {expandedSkill && (
        <div className={`sub-managers ${isAnimating ? 'hidden' : 'visible'}`}>
          {skillsData.find(skill => skill.name === expandedSkill)?.subSkills.map((subSkill, subIndex) => (
            <div key={subIndex} className="node sub-node">
              <h4>{subSkill}</h4>
            </div>
          ))}
        </div>
      )}
      <Certifications limit={6} />
    </div>
  );
};

export default Skills;