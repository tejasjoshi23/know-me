import React from "react";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import { experiences } from "../const/index";
import "../styles/Experience.css";
import { StarsCanvas } from "../canvas";

const Experience = () => {
  const { ref: timelineRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
  
      <div className="experience-container">
        <div
          className={`experience-section ${inView ? "animate" : ""}`}
          ref={timelineRef}
        >
          <h1 className="head-text">Work Experience</h1>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                className="vertical-timeline-element"
                key={`${experience.company_name}-${index}`}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="icon-wrapper">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="icon-image"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: `8px solid ${experience.iconBg}`,
                  boxShadow: "none",
                }}
              >
                <div className="experience-content">
                  <h3 className="experience-title">{experience.title}</h3>
                  <p className="experience-company">{experience.company_name}</p>
                  <ul className="experience-points">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="experience-point"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        {/* <section className="cta-section">
          <p className="cta-text">
            Have a project in mind? <br className="hidden-on-small" />
            I think
          </p>
          <Link to="/contact" className="cta-button">
            Contact
          </Link>
        </section> */}
      </div>
      
  );
};

export default Experience;
