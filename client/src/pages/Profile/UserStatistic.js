import React from "react";
import { useSelector } from "react-redux";

const UserStatistic = () => {
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

  return isAuth ? (
    <section className="gamesListPage">
      <h2>User Statistic</h2>
    </section>
  ) : (
    <div className="resultsContainer">
      <h2>This content is only for Logged In Users</h2>
    </div>
  );
};

export default UserStatistic;
