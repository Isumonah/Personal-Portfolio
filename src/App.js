import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// import EachProject from "./components/EachProject"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects#contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
