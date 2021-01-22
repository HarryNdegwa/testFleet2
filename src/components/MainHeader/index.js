import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import "./style.css";

function MainHeader(props) {
  return (
    <div className="main-header">
      <div className="container h-100">
        <div className="brand">
          <span>
            <GiSteeringWheel style={{ fontSize: "50px" }} />
          </span>
          <h3 className="ml-2">
            <b>
              Insta<span style={{ color: "#e5af1f" }}>Driver</span>
            </b>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
