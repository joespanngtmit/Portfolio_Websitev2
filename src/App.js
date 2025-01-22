import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutMe";
import SkillsTree from "./components/SkillsTree";
import ConnectMe from "./components/ConnectMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground"; // Import the particles background
import "./App.css"; // Ensure this file contains smooth scrolling CSS

const App = () => {
  const [activeSection, setActiveSection] = useState("home"); // State to track the active section
  const [themeColor, setThemeColor] = useState("#ffffff"); // State for dynamic particle color

  // Function to dynamically render the active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <SkillsTree />;
      case "connect":
        return <ConnectMe />;
      default:
        return <Home />;
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Conditionally render ParticleBackground only on the Home page */}
        {activeSection === "home" && <ParticlesBackground themeColor={themeColor} />}

        {/* Navbar passes the activeSection setter and themeColor setter */}
        <Navbar 
          setActiveSection={setActiveSection} 
          setThemeColor={setThemeColor} 
        />
        
        {/* Only render the active section */}
        <div className="content-section">
          {renderActiveSection()}
        </div>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
