import React from 'react';
import '../styles/Clouds.css';
import Comet from  "./Comet";


const Cloud = ({ color }) => {
  return (
    <div className={`cloud ${color}`} />
  );
};

const ColorfulClouds = () => {
  return (
    <div className="clouds-container">
      <Cloud color="blue" />
      <Cloud color="pink" />
      <Cloud color="purple" />
      <Cloud color="orange" />
      <Cloud color="green" />
        <Comet/>
    </div>
  );
};

export default ColorfulClouds;
