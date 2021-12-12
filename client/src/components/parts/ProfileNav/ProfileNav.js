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
    <nav className="nav profileMenuNavbar">
      <NavLink className="navlink" to="/userprofile">
        My Profile
      </NavLink>
      <NavLink className="navlink" to="/userstatistic">
        My Statistic
      </NavLink>
      <NavLink className="navlink" to="/userdictionary">
        My Dictionary
      </NavLink>
      <Button
        className="navlink btn-beige"
        onButtonClick={logoutClickHandler}
        title="Logout"
      />
    </nav>
  ) : (
    <div className="nav profileMenuNavbar">
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
