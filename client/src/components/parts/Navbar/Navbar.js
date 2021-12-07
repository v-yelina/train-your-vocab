import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import ProfileNav from "../ProfileNav/ProfileNav";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

  const renderLinksInAuth = () => {
    return !isAuth ? (
      <>
        <nav className="nav">
          <NavLink className="navlink" to="/">
            Main Page
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
      </>
    ) : (
      <>
        <nav className="nav">
          <NavLink className="navlink" to="/">
            Main Page
          </NavLink>
          <NavLink className="navlink" to="/gameslist">
            All Games
          </NavLink>
        </nav>
        <nav className="nav">
          <ProfileNav />
        </nav>
      </>
    );
  };

  return <div className="navigation">{renderLinksInAuth()}</div>;
};

export default Navbar;
