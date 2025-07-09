import React, { useRef, useEffect, useState } from "react";
import "./Education.css";
import Experience from "../Experience/Experience"; // Import the Experience component

const Education = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1185);
  const educationData = [
    {
      logo: "/path/to/institution1-logo.png",
      institution: "University of California, San Diego Extension",
      degree: "Web Develeopement Bootcamp",
      duration: "2020 - 2021",
      description:
        "Successfully completed a 256-hour web development program centered on the MERN stack, gaining practical experience in building user-friendly, production-ready applications.",
    },
    {
      institution: "Grossmont College",
      degree: "Associate Degree in Computer Science and Mathematics",
      duration: "2019 - 2020",
      description:
        "Completed a comprehensive academic program focused on the foundations of software engineering and analytical problem-solving. Coursework included Java, C++, data structures, and core programming principles, providing a strong base in both theoretical and applied computer science.",
    },
    {
      institution: "San Diego City College",
      degree: "Computer Science Coursework",
      duration: "2018 - 2019",
      description:
        "Began my formal education in computer science while working full-time, balancing professional responsibilities with evening and weekend classes. Focused on foundational courses in programming, logic, and mathematics, with the intent to transfer to a community college offering a more specialized computer science pathway. This experience laid the groundwork for my successful transition to Grossmont College and ultimately toward pursuing a four-year degree.",
    },
    // Add more education entries as needed
  ];
  const cardsRef = useRef([]);
  const timelineRef = useRef(null);
  const [cardOffsets, setCardOffsets] = useState([]);

  // Loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1185);
      if (!isLoading) {
        calculateOffsets();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen, isLoading]);

  // Calculate offsets when isLoading changes
  useEffect(() => {
    if (!isLoading) {
      calculateOffsets();
    }
  }, [isLoading]);

  // Function to calculate card offsets and timeline height
  const calculateOffsets = () => {
    let cumulativeHeight = 0;
    let offsets = [];
    cardsRef.current.forEach((card, index) => {
      if (card) {
        offsets.push(cumulativeHeight);
        cumulativeHeight += card.offsetHeight + 40;
        card.classList.add(index % 2 === 0 ? "odd" : "even");
      }
    });
    setCardOffsets(offsets);
    timelineRef.current.style.height = `${cumulativeHeight}px`;
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="bouncing-ball" />
      </div>
    );
  }

  return (
    <section className="education-section" aria-labelledby="education-title">
      <h2 className="education-title" id="education-title">
        Education
      </h2>
      <div className="education-timeline" ref={timelineRef}>
        {educationData.map((edu, index) => (
          <div key={index} className="education-wrapper">
            {/* Checkpoint */}
            <div
              className="education-checkpoint"
              style={{ top: `${cardOffsets[index] + 45}px` }}
            >
              <div className="checkpoint-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
            </div>

            {/* Date (visible on large screens) */}
            {!isSmallScreen && (
              <div
                className={`education-date ${index % 2 === 0 ? "odd" : "even"}`}
                style={{
                  top: `${cardOffsets[index] + 45}px`,
                  left: index % 2 === 0 ? "auto" : "465px",
                  right: index % 2 === 0 ? "470px" : "auto",
                }}
              >
                {edu.duration}
              </div>
            )}

            {/* Education Card */}
            <div
              className="education-card"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                left: isSmallScreen ? "0" : index % 2 === 0 ? "105px" : "auto",
                right: isSmallScreen ? "0" : index % 2 === 0 ? "auto" : "105px",
                top: isSmallScreen
                  ? `${cardOffsets[index]}px`
                  : `${cardOffsets[index] + 20}px`,
                transform: isSmallScreen
                  ? "none"
                  : index % 2 === 0
                  ? "translateX(25%)"
                  : "translateX(-25%)",
              }}
            >
              <h3 className="institution-name">{edu.institution}</h3>
              <h4 className="degree-name">{edu.degree}</h4>
              {isSmallScreen && <p className="duration">{edu.duration}</p>}
              <p className="description">{edu.description}</p>
              <div className="triangle" />
            </div>
          </div>
        ))}
      </div>
      <Experience /> {/* Add the Experience component here */}
    </section>
  );
};

export default Education;