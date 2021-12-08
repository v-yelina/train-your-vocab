import React from "react";
import { useSelector } from "react-redux";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";

const UserProfile = () => {
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

  return isAuth ? (
    <section className="gamesListPage">
      <h2>User Profile</h2>
    </section>
  ) : (
    <UnauthorizedError />
  );
};

export default UserProfile;
