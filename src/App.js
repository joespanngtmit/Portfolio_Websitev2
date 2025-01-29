import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutMe";
import SkillsTree from "./components/SkillsTree";
import ConnectMe from "./components/ConnectMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeContext";
import "./App.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="content-section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<SkillsTree />} />
              <Route path="/connect" element={<ConnectMe />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;