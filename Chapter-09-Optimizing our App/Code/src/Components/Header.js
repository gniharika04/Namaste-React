import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/foodLogo.png";
import { useOnline } from "../util/useOnline";

// Title component for display logo
const Title = () => {
  return (
    <div className="title">
      <img className="logo" src={logo}></img>
      <h2>picky</h2>
    </div>
  );
};

// Nav component for display navbar items
const NavComponents = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const isUserOnline = useOnline();
  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
        </li>
        <i className="ri-shopping-cart-2-fill"></i>
        {/* Created toggle button functionality for login and logout button by conditional rendering */}
        <li>
        {isLoggedIn ? (
          // <button className="loginBtn" onClick={() => setIsLoggedIn(false)}>
          <button className="loginBtn" onClick={() => navigate("/login")}>
            Login
          </button>
        ) : (
          <>
          <button className="loginBtn" onClick={() => setIsLoggedIn(true)}>
            Log out
          </button>
          <span className={isUserOnline ? "online" : "offline"}>●</span>
          </>
        )}
        </li>
      </ul>
    </>
  );
};

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <NavComponents />
      </div>
    </>
  );
};

export default Header;
