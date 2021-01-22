import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import "./style.css";

function MainHeader(props) {
  return (
    <div className="main-header">
      <div className="container h-100">
        <div className="row w-100 justify-between h-100 m-0">
          <div className="col-6 col-md-4 brand">
            <span>
              <GiSteeringWheel className="brand-icon" />
            </span>
            <p className="ml-2 brand-text">
              <b>
                Insta<span style={{ color: "#e5af1f" }}>Driver</span>
              </b>
            </p>
          </div>
          <div className="col-md-7 header-buttons">
            <button className="btn">Jobs</button>
            <button className="btn">Get Social</button>
            <button className="btn">James Keem</button>
          </div>
          <div className="col-6 col-md-1 header-hamburger h-100">
            <h5>Menu</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
