// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Aboutme/AboutMe";
import Skills from "./components/Skills/Skills";
import ConnectMe from "./components/ConnectMe";
import AllCertifications from "./components/Certification/AllCertifications";
import Education from "./components/Education/Education"; // Import the new Education component
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/ParticleBackground/ThemeContext";
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
              <Route path="/skills" element={<Skills />} />
              <Route path="/connect" element={<ConnectMe />} />
              <Route path="/certifications" element={<AllCertifications />} />
              <Route path="/education" element={<Education />} /> {/* New route */}
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;