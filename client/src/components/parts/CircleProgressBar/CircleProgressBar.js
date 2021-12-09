import React from "react";
import "./CircleProgressBar.css";

const CircleProgressBar = (props) => {
  return (
    <div class="statsContainer">
      <div class="statsCard">
        <div class="box">
          <div class="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{
                  strokeDashoffset: `calc(440 - (440 * ${props.percent}) / 100)`,
                }}
              ></circle>
            </svg>
            <div class="num">
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
