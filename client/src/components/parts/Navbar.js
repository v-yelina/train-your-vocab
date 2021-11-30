import React from "react";
import { NavLink } from "react-router-dom";

export default (props) => {
  return (
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
      <NavLink className="navlink" to="/login">
        Login
      </NavLink>
      <NavLink className="navlink" to="/registration">
        Registration
      </NavLink>
    </nav>
  );
};
