import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../store/Users/UserActionCreator";

export default () => {
  const users = useSelector((state) => state.user.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const renderUsers = () =>
    users.map((user) => (
      <li key={user.id}>
        {user.username} ({user.email})
      </li>
    ));

  return (
    <div>
      <h2>Users</h2>
      <ul>{renderUsers()}</ul>
    </div>
  );
};
