import React, { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { extractColorsAndInjectCSS } from "../utils/index"; // Import the utility function
import { ABOUT_TEXTS, Emojis } from "../const/index";
import { DownloadIcon } from "../assets/IconSvg";
import { StarsCanvas } from "../canvas";
import { skills } from "../const/index";
import { motion } from "framer-motion";
import { slideIn } from "../utils";
import "../styles/About.css";
import profileImage from "../assets/photo2.png";

const About = () => {
  const [selectedAbout, setSelectedAbout] = useState("about3");
  const [skillColors, setSkillColors] = useState({});
  const pdfUrl = "/resume1.pdf";

  const imageRef = useRef(null);
  useEffect(() => {
    extractColorsAndInjectCSS(skills, setSkillColors); // Use the utility function
    // Initialize Vanilla Tilt on the image element
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: -25, // Maximum tilt rotation (in degrees)
        speed: 800, // Speed of the effect
        glare: true, // Enable glare effect
        "max-glare": 0.5, // Maximum glare opacity
      });
    }

    return () => {
       if (imageRef.current && imageRef.current.vanillaTilt) {
        imageRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="about-container">
        <StarsCanvas />
        <div className="left-section">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn("left", "tween", 0.5, 1)}
            className="left-section-content"
          >
            <span className="adjust-bio-header">Adjust Bio Length</span>
            <div className="buttons-container">
              {Object.keys(ABOUT_TEXTS).map((key, index) => (
                <button
                  key={key}
                  className={`about-button ${
                    selectedAbout === key ? "active" : ""
                  }`}
                  onClick={() => setSelectedAbout(key)}
                >
                  {Emojis[index]}
                </button>
              ))}
            </div>
            <div className="short-long">
              <span>Shortest</span>
              <span>Longest</span>
            </div>
            <div className="about-text-container">
              <div
                className="about-text"
                dangerouslySetInnerHTML={{
                  __html: ABOUT_TEXTS[selectedAbout],
                }}
              />
            </div>
          </motion.div>
        </div>
        <div className="right-section">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn("right", "tween", 0.5, 1)}
            className="right-section-content"
          >
            <img
              src={profileImage}
              alt="Tejas"
              className="profile-image"
              ref={imageRef}
            />
            <h2 className="name">
              {Array.from("TEJAS JOSHI").map((letter, index) => (
                <span key={index} className="name-letter">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h2>
            <div className="contact-icons">
              <a
                className="download-btn"
                href={pdfUrl}
                download="tejas-joshi-resume.pdf"
              >
                <DownloadIcon />
              </a>
            </div>
            <p className="resume-text">Resume</p>
          </motion.div>
        </div>
      </div>

      <div className="skills">
        <StarsCanvas />
        <h1>Techie Skills</h1>
        <div className="skill-container">
          {skills.map((skill) => (
            <div
              className={`skill-items shadow-${skill.name}`}
              key={skill.name}
            >
              <img src={skill.icon} alt={skill.name} />
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
