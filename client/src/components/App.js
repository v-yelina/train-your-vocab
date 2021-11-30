import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./parts/Navbar/Navbar";
import SwitchPages from "./parts/SwitchPages";
import { authInReload } from "../store/actionsCreator";

const App = () => {
  const dispatch = useDispatch();

  const setAuthReload = () => {
    dispatch(authInReload());
  };

  useEffect(() => {
    const authInfo = JSON.parse(localStorage.getItem("authInfo"));
    if (authInfo && authInfo.token) {
      setAuthReload();
    }
  }, []);

  return (
    <div className="container">
      <Navbar />
      <SwitchPages />
    </div>
  );
};

export default App;
