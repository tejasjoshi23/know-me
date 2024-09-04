import React, { useState } from "react";
import { ABOUT_TEXTS, Emojis } from "../const/index";
import { LinkedInURL, EmailURL } from "../const/urls";
import { LinkedInIcon, EmailIcon, DownloadIcon } from "../assets/IconSvg";
import "../styles/About.css";
import s from "../assets/photo2.png";
import { StarsCanvas } from "../canvas";
import DImg from "../assets/download.png";
import { skills } from "../const/index";

import { motion } from "framer-motion";

import { slideIn } from "../utils";

const About = () => {
  const [selectedAbout, setSelectedAbout] = useState("about3");
  const pdfUrl = "/resume.pdf";

  return (
    <>
      <div className="about-container">
        <StarsCanvas />

        <div className="left-section">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn("left", "tween", 0.5, 1)}
            className="left-section"
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
                dangerouslySetInnerHTML={{ __html: ABOUT_TEXTS[selectedAbout] }}
              />
            </div>
          </motion.div>
        </div>
        <div className="right-section">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn("right", "tween", 0.5, 1)}
            className="right-section"
          >
            <img src={s} alt="Tejas" className="profile-image" />
            <h2 className="name">
              {Array.from("/_TEJAS _ JOSHI_/").map((letter, index) => (
                <span key={index} className="name-letter">
                  {letter}
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
            <p>Resume</p>
          </motion.div>
        </div>
      </div>

      <div className="skills">
        <StarsCanvas />

        <h2>Skills</h2>
        <div className="skill-container">
          {skills.map((skills) => (
            <div className="skill-items" key={skills.name}>
              <img src={skills.icon} alt={skills.name} />
              <div className="skill-name">{skills.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
