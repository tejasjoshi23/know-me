import React, { useState } from "react";
import "../styles/HomePageText.css";
import { HeroTitle } from "../const/index";

const HomePageText = () => {
  return <div className="animated-text">{HeroTitle}</div>;
};

export default HomePageText;
