import React, { useState } from "react";
import { ABOUT_TEXTS, Emojis} from "../const/index";
import { LinkedInURL, EmailURL } from "../const/urls";
import { LinkedInIcon, EmailIcon } from "../assets/IconSvg";
import "../styles/About.css";
import s from "../assets/photo1.jpg";
import { StarsCanvas } from "./canvas";
const About = () => {
  const [selectedAbout, setSelectedAbout] = useState("about3");

  return (
    <>
    <StarsCanvas/>
    <div className="about-container">
      <div className="left-section">
        <h2 className="know-me">Know Me</h2>
        <h5 className="adjust-bio-header">Adjust Bio Length</h5>
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
      </div>

      <div className="right-section">
        <img src={s} alt="Tejas" className="profile-image" />
        <h2 className="name">
          {Array.from("/_TEJAS _ JOSHI_/").map((letter, index) => (
            <span key={index} className="name-letter">
              {letter}
            </span>
          ))}
        </h2>
        <div className="contact-icons">
          <a href={`mailto:${EmailURL}`}>
            <EmailIcon />
          </a>
          <a href={LinkedInURL} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>

          </>
  );
};

export default About;
