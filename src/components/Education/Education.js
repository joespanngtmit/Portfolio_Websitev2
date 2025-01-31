import React, { useRef, useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      logo: '/path/to/institution1-logo.png',
      institution: 'Poornima University',
      degree: 'Bachelor of Computer Applications (Data Science)',
      duration: '2020 - 2023',
      description: 'Completed a comprehensive program covering core computer science topics including algorithms, data structures, and software engineering.',
    },
    {
      institution: 'Guru Ram Rai Public School',
      degree: 'Senior Secondary Education | 11th & 12th Standard',
      duration: '2018 - 2020',
      description: 'Focused on foundational programming skills and software development practices.',
    },
    {
      institution: 'Tagore Public School',
      degree: 'High School | 9th & 10th Standard',
      duration: '2016 - 2018',
      description: 'Focused on foundational programming skills and software development practices.',
    },
    // Add more education entries as needed
  ];

  const cardsRef = useRef([]);
  const timelineRef = useRef(null);
  const [cardOffsets, setCardOffsets] = useState([]);

  useEffect(() => {
    const cards = cardsRef.current;
    let cumulativeHeight = 0;
    let offsets = [];

    cards.forEach((card, index) => {
      if (card) {
        offsets.push(cumulativeHeight);
        cumulativeHeight += card.offsetHeight + 40; // Add margin-bottom for spacing
        card.classList.add(index % 2 === 0 ? 'odd' : 'even');

        // Adjust triangle position
        const triangle = card.querySelector('.triangle');
        if (triangle) {
          // Calculate the vertical position of the triangle to align with the checkpoint
          const checkpointOffset = cardOffsets[index] + 50; // Adjust based on checkpoint position
          triangle.style.transform = `translateY(${checkpointOffset}px)`; // Align the triangle with the checkpoint
        }
      }
    });

    setCardOffsets(offsets);

    if (timelineRef.current) {
      timelineRef.current.style.height = `${cumulativeHeight}px`;
    }

    // Adjust layout on window resize
    const handleResize = () => {
      setCardOffsets([]);
      setTimeout(() => {
        let newOffsets = [];
        let newCumulativeHeight = 0;
        cards.forEach((card, index) => {
          if (card) {
            newOffsets.push(newCumulativeHeight);
            newCumulativeHeight += card.offsetHeight + 40; // Add margin-bottom for spacing
            card.classList.add(index % 2 === 0 ? 'odd' : 'even');

            // Adjust triangle position
            const triangle = card.querySelector('.triangle');
            if (triangle) {
              // Calculate the vertical position of the triangle to align with the checkpoint
              const checkpointOffset = newOffsets[index] + 50; // Adjust based on checkpoint position
              triangle.style.transform = `translateY(${checkpointOffset}px)`; // Align the triangle with the checkpoint
            }
          }
        });
        setCardOffsets(newOffsets);
        if (timelineRef.current) {
          timelineRef.current.style.height = `${newCumulativeHeight}px`;
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cardOffsets]); // Include cardOffsets in the dependency array

  return (
    <section className="education-section" aria-labelledby="education-title">
      <h2 className="education-title" id="education-title">
        Education
      </h2>
      <div className="education-timeline" ref={timelineRef}>
        {educationData.map((edu, index) => (
          <div key={index} className="education-wrapper">
            {/* Checkpoint (Graduation Cap Icon) */}
            <div className="education-checkpoint" style={{ top: `${cardOffsets[index] + 25}px` }}>
              <div className="checkpoint-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
            </div>

            {/* Date next to the checkpoint */}
            <div
              className={`education-date ${index % 2 === 0 ? 'odd' : 'even'}`}
              style={{
                top: `${cardOffsets[index] + 25}px`,
                left: index % 2 === 0 ? 'auto' : '470px',
                right: index % 2 === 0 ? '470px' : 'auto',
              }}
            >
              {edu.duration}
            </div>

            {/* Education Card */}
            <div
              className="education-card"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                left: index % 2 === 0 ? '-15px' : 'auto',
                right: index % 2 === 0 ? 'auto' : '-20px',
                top: `${cardOffsets[index]}px`,
                transform: index % 2 === 0 ? 'translateX(25%)' : 'translateX(-25%)',
              }}
            >
              <h3 className="institution-name">{edu.institution}</h3>
              <h4 className="degree-name">{edu.degree}</h4>
              <p className="description">{edu.description}</p>
              <div className="triangle"></div> {/* Triangle element */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;