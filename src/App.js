import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutMe";
import SkillsTree from "./components/SkillsTree";
import ConnectMe from "./components/ConnectMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css'; // Ensure this file contains smooth scrolling CSS

const App = () => {
  const [openCategory, setOpenCategory] = useState(null);

  // Simplified scroll behavior without custom event handling
  useEffect(() => {
    // Optional: You can add logic to handle animations or other effects on scroll if needed
  }, []);

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Sections with padding to avoid navbar overlap */}
        <div className="content-section home">
          <Home />
        </div>
        <div className="content-section about">
          <About />
        </div>
        <div className="content-section skillsTree">
          <SkillsTree />
        </div>
        <div className="content-section connectMe">
          <ConnectMe />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
