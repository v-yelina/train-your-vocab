import React from "react";
import { useSelector } from "react-redux";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";

const UserStatistic = () => {
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

  return isAuth ? (
    <section className="gamesListPage">
      <h2>User Statistic</h2>
    </section>
  ) : (
    <UnauthorizedError />
  );
};

export default UserStatistic;
