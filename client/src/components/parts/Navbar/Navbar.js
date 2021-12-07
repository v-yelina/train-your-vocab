import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../../../store/actionsCreator";
import Button from "../../ui/Button/Button";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.auth.isAuth);
  const dispatch = useDispatch();

  const logoutClickHandler = (e) => {
    console.log("Logout");
    e.preventDefault();
    dispatch(doLogout());
  };

  const renderLinksInAuth = () => {
    return isAuth ? (
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
          <Profile />
        </nav>
      </>
    );
  };

  return <div className="navigation"></div>;
};

export default Navbar;
