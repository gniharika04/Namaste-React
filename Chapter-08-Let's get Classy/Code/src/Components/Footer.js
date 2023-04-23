import React from "react";
import logo from "../assets/foodLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <img className="logo" src={logo}></img>
        <h3>picky</h3>
      </div>
      <h4>Made with <span><i className="ri-heart-3-fill"></i></span> by Niharika Gupta</h4>
      <div className="social-icons">
        <i className="ri-facebook-fill"></i>
        <i className="ri-pinterest-line"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-twitter-fill"></i>
      </div>
    </div>
  );
};

export default Footer;
