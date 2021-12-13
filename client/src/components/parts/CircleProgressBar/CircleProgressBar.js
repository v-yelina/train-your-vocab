import React from "react";
import "./CircleProgressBar.css";

const CircleProgressBar = (props) => {
  return (
    <div className="statsContainer">
      <div className="statsCard">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"/>
              <circle
    cx="70"
    cy="70"
    r="70"
    style={{
      strokeDashoffset: `calc(440 - (440 * ${props.percent}) / 100)`,
    }}
    />
            </svg>
            <div className="num">
              <h2>
                {Math.round(props.percent)}
                <span>%</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleProgressBar;
