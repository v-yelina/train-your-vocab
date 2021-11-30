import React from "react";

import "./Button.scss";

const Button = (props) => {
  return (
    <button
      type={props.type ?? "button"}
      className={`btn ${props.className}`}
      onClick={props.onButtonClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
