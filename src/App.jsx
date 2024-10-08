import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Hero, Navbar, Experience } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />

        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
