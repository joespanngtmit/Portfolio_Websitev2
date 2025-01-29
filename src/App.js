// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import ConnectMe from "./components/ConnectMe";
import AllCertifications from "./components/AllCertifications"; // Import the new component
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
              <Route path="/skills" element={<Skills />} />
              <Route path="/connect" element={<ConnectMe />} />
              <Route path="/certifications" element={<AllCertifications />} /> {/* New route */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;