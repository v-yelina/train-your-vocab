import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default (props) => {
  return (
    <div className="navigation">
      <nav className="nav">
        <NavLink className="navlink" to="/">
          Main Page
        </NavLink>
        <NavLink className="navlink" to="/cards">
          Cards Game
        </NavLink>
        <NavLink className="navlink" to="/enter">
          Enter translation
        </NavLink>
      </nav>
      <nav className="nav">
        <NavLink className="navlink" to="/login">
          Login
        </NavLink>
        <NavLink className="navlink" to="/registration">
          Registration
        </NavLink>
      </nav>
    </div>
  );
};
