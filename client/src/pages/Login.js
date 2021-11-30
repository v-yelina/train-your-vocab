import React, { useState } from "react";
// import Field from "./ui/Field/Field";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const onFieldChange = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <h2>Login form</h2>
        {/* <Field
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
          value={login.email}
          onFieldChange={onFieldChange}
        /> */}
      </form>
    </div>
  );
};

export default Login;
