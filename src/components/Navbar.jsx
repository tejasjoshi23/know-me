import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../styles/Navbar.css"; 

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sticky = document.getElementById("navbar").offsetTop;
      setIsSticky(window.pageYOffset > sticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`} id="navbar">
      <div className="logo">
        <Link to="/" style={{ fontSize: "20px" }}>
          Tejas Joshi
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
