import React from "react";
import { StarsCanvas, ColorfulClouds, Comet, RobotCanvas } from "./canvas";
import { HomePageText } from "../utils";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div>{/* <RobotCanvas /> */}</div>
        <div><HomePageText /></div>
      </div>
      <StarsCanvas />
      <ColorfulClouds />
      <Comet />
    </div>
  );
};

export default Hero;
