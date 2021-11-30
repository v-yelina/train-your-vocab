import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Field from "../components/ui/Field/Field";
import Button from "../components/ui/Button/Button";
import { doLogin } from "../store/actionsCreator";
import Error from "../components/ui/Error/Error";

const Login = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  const [login, setLogin] = useState({ email: "", password: "" });
  const onFieldChange = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(doLogin(login));
  };

  const isError = () => {
    return errors.isError ? <Error message={errors.message} /> : null;
  };

  return (
    <div className="login-window">
      <form onSubmit={onFormSubmit}>
        {isError()}
        <Field
          id="email"
          label="Login"
          type="text"
          value={login.email}
          onFieldChange={onFieldChange}
        />
        <Field
          id="password"
          label="Password"
          type="password"
          value={login.password}
          onFieldChange={onFieldChange}
        />
        <Button
          type="submit"
          title="Login"
          onButtonClick={onFormSubmit}
          className="btn-login"
        />
      </form>
    </div>
  );
};

export default Login;
