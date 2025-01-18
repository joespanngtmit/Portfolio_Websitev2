import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutMe";
import SkillsTree from "./components/SkillsTree";
import ConnectMe from "./components/ConnectMe";
import Footer from "./components/Footer";
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
        <Home />
        <About />
        <SkillsTree />
        <ConnectMe />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
