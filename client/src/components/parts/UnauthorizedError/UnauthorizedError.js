import React from "react";
import "./UnauthorizedError.css";

export default () => {
  return (
    <div className="unauthorized">
      <h2>This content is only for Logged In Users</h2>
    </div>
  );
};
