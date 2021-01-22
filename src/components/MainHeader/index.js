import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import "./style.css";

function MainHeader(props) {
  return (
    <div className="main-header">
      <div className="container h-100">
        <div className="row w-100 justify-between">
          <div className="col-6 col-md-4 brand">
            <span>
              <GiSteeringWheel style={{ fontSize: "50px" }} />
            </span>
            <h3 className="ml-2">
              <b>
                Insta<span style={{ color: "#e5af1f" }}>Driver</span>
              </b>
            </h3>
          </div>
          <div className="col-md-6 header-buttons">
            <button className="btn btn-lg">Jobs</button>
            <button className="btn btn-lg">Get Social</button>
            <button className="btn btn-lg">James Keem</button>
          </div>
          <div className="col-6 col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
