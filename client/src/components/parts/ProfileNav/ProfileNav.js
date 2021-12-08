import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProfileNav.css";
import { useDispatch } from "react-redux";
import { doLogout } from "../../../store/actionsCreator";
import Button from "../../ui/Button/Button";

const ProfileNav = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("click", () => setIsOpen(false));
  // }, []);

  const logoutClickHandler = (e) => {
    console.log("Logout");
    e.preventDefault();
    dispatch(doLogout());
  };

  return isOpen ? (
    <div className="navigation profileMenuNavbar">
      <nav className="nav">
        <NavLink className="navlink" to="/userprofile">
          My Profile
        </NavLink>
        <NavLink className="navlink" to="/userstatistic">
          My Statistic
        </NavLink>
        <NavLink className="navlink" to="/userdict">
          My Dictionary
        </NavLink>
        {/* <NavLink to="/users" className="navlink">
          Users
        </NavLink> */}
        <Button
          className="navlink btn-beige"
          onButtonClick={logoutClickHandler}
          title="Logout"
        />
      </nav>
    </div>
  ) : (
    <div className="navigation profileMenuNavbar">
      <button
        className="navlink"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Show menu
      </button>
    </div>
  );
};

export default ProfileNav;
