import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contact />} />
      </Routes>
    </Router>
  );
}
