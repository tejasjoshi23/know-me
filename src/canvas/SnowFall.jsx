import React from "react";
import "../styles/SnowFall.css";

const SnowFall = () => {
  return (
    <div>
      <div className="snowMan">
      </div>

      <div className="snowFall">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i}></div>
          ))}
      </div>
      <div className="snowFall delayMe">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i}></div>
          ))}
      </div>
      <div className="snowFall biggerSnow">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i}></div>
          ))}
      </div>
      <div className="snowFall delayMe biggerSnow">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i}></div>
          ))}
      </div>
    </div>
  );
};

export default SnowFall;
