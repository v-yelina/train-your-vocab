import React from "react";
import "./Field.scss";

const Field = (props) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        className="field__input"
        value={props.value}
        onChange={props.onFieldChange}
      />
    </div>
  );
};

export default Field;
