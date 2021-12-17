import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doRegistration } from "../store/actionsCreator";
import Error from "../components/ui/Error/Error";
import Field from "../components/ui/Field/Field";
import Button from "../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import './styles/Login.css'

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errors = useSelector((state) => state.auth.errors);
  const isAuth = useSelector((state) => state.auth.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const onFieldChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(doRegistration(user));
  };

  const isError = () => {
    return errors.isError ? <Error message={errors.message} /> : null;
  };

  return (
    <div className="login-window">
      <form onSubmit={onFormSubmit}>
        <h2>Registration Form</h2>
        {isError()}
        <Field
          id="username"
          label="User Name"
          type="text"
          value={user.username}
          onFieldChange={onFieldChange}
        />
        <Field
          id="email"
          label="Email (login)"
          type="text"
          value={user.email}
          onFieldChange={onFieldChange}
        />
        <Field
          id="password"
          label="Password"
          type="password"
          value={user.password}
          onFieldChange={onFieldChange}
        />
        <Button
          type="submit"
          title="Create account"
          onButtonClick={onFormSubmit}
          className="btn-login"
        />
      </form>
    </div>
  );
};

export default Registration;
