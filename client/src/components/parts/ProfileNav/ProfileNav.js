import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileNav.css";
import { useDispatch } from "react-redux";
import { doLogout } from "../../../store/actionsCreator";
import Button from "../../ui/Button/Button";

const ProfileNav = () => {
  const dispatch = useDispatch();

  const logoutClickHandler = (e) => {
    console.log("Logout");
    e.preventDefault();
    dispatch(doLogout());
  };

  return (
    <div className="navigation sideNavbar">
      <nav className="nav">
        <NavLink className="navlink" to="/cards">
          Cards Game
        </NavLink>
        <NavLink to="/users" className="navlink">
          Users
        </NavLink>
        <Button
          className="navlink btn-beige"
          onButtonClick={logoutClickHandler}
          title="LogOut"
        />
      </nav>
    </div>
  );
};

export default ProfileNav;
