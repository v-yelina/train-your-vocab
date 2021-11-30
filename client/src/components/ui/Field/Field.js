import React from "react";
import "./Field.css";

const Field = (props) => {
  return (
    <div className="field">
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
