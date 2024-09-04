import React from "react";
import { StarsCanvas, ColorfulClouds, Comet, RobotCanvas, SkyMoon } from "../canvas";
import { HomePageText } from "../utils";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div><HomePageText /></div>
      </div>
      <Comet />
      <SkyMoon/>
    </div>
  );
};

export default Hero;
