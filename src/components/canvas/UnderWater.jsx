import React from "react";
import "../../styles/UnderWater.css";

const UnderwaterBackground = () => {
  return (
    <div className="underwater-container">
      <div id="surface"></div>
      <div id="caustics"></div>
      <div id="bg"></div>

      <div id="sun">
        <div id="sun_layer1"></div>
        <div id="sun_layer2"></div>
        <div id="sun_layer3"></div>
      </div>
    </div>
  );
};

export default UnderwaterBackground;
