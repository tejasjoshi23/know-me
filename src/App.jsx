import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Hero, Navbar } from "./components";
import { SkyAndBirds } from "./components/canvas";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />

        {/* Add additional routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
