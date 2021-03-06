import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="navigation sideNavbar">
      <nav className="nav">
        <NavLink className="navlink" to="/cards">
          Cards Game
        </NavLink>
        <NavLink className="navlink" to="/enter">
          Enter translation
        </NavLink>
        <NavLink className="navlink" to="/chooseone">
          Choose One
        </NavLink>
        <NavLink className="navlink" to="/buildword">
          Build a Word
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNavbar;
