import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import "../App.css"; // Assuming this has necessary CSS styles

function Home() {
  const [text, setText] = useState(""); // State to handle displayed text
  const [index, setIndex] = useState(0); // Index to track the text
  const textArray = ["Rohan Goyal", "Data Enthusiast", "Python Developer"]; // Texts for the typewriter effect

  // Intersection observer hook to trigger animations when section is in view
  const { ref: homeRef, inView: homeInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of section is visible
  });

  useEffect(() => {
    // Disable scroll when hovering over the section
    const disableScroll = () => {
      document.body.style.overflow = "hidden"; // Disable scroll
    };

    // Enable scroll when exiting the section
    const enableScroll = () => {
      document.body.style.overflow = "auto"; // Enable scroll
    };

    const homeSection = document.getElementById("home");
    homeSection.addEventListener("mouseenter", disableScroll);
    homeSection.addEventListener("mouseleave", enableScroll);

    // Cleanup the event listeners
    return () => {
      homeSection.removeEventListener("mouseenter", disableScroll);
      homeSection.removeEventListener("mouseleave", enableScroll);
    };
  }, []);

  useEffect(() => {
    const currentText = textArray[index];
    let i = 0;

    const typingInterval = setInterval(() => {
      setText((prev) => currentText.substring(0, i + 1));
      i++;
      if (i === currentText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Move to the next text
        }, 2000); // Delay before starting the next text
      }
    }, 100); // Typing speed (100ms per character)

    return () => clearInterval(typingInterval); // Cleanup interval
  }, [index]);

  return (
    <section
      id="home"
      className={`home-section ${homeInView ? "animate-in" : ""}`} // Apply animation when in view
      ref={homeRef} // Set ref for Intersection Observer
    >
      <div className="home-container">
        <img
          src={require("../assets/profile.png")}
          alt="Rohan Goyal"
          className="profile-pic"
        />
        <h1 className="home-title">{text}</h1>
      </div>
    </section>
  );
}

export default Home;
