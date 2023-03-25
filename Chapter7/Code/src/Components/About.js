import React from "react";
import fries from '../assets/fries.png';

const About = () => {
  return (
    <div className="about-container">
    <div className="about-left">
      <h1>
        Welcome to <br /> The world of <br /> <span>Testy & Fresh Food</span>
      </h1>
      <h4>
        "You will be amazed by the service and meal provided by the<span> Food</span> Picky"
      </h4>
    </div>
    <div className="about-right">
      <img src={fries} alt="Food Image" />
    </div>
  </div>
  );
};
export default About;
