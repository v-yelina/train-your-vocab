import React from "react";
import {useDispatch, useSelector} from "react-redux";
import UnauthorizedError from "../../components/parts/UnauthorizedError/UnauthorizedError";

const UserDict = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

  return isAuth ? (
    <section className="gamesListPage">
      <h2>User Vocab</h2>
    </section>
  ) : (
    <UnauthorizedError />
  );
};

export default UserDict;
