import React from "react";
import { GiSteeringWheel } from "react-icons/gi";
import "./style.css";
import HamburgerMenu from "react-hamburger-menu";
import { RiArrowDropDownLine } from "react-icons/ri";

function MainHeader(props) {
  const handleClick = () => {};
  return (
    <div className="main-header">
      <div className="container h-100">
        <div className="w-100 h-100 m-0" style={{ display: "flex" }}>
          <div className="brand">
            <span>
              <GiSteeringWheel className="brand-icon" />
            </span>
            <p className="ml-2 brand-text">
              <b>
                Insta<span style={{ color: "#e5af1f" }}>Driver</span>
              </b>
            </p>
          </div>
          <div id="sm-menu-dropdown">
            <RiArrowDropDownLine
              style={{ fontSize: "30px", color: "#454444" }}
            />
          </div>
          <div className="header-buttons">
            <button className="btn">Jobs</button>
            <button className="btn">Get Social</button>
            <button className="btn">James Keem</button>
          </div>
          <div className="header-hamburger h-100">
            <h5 className="mr-2">Menu</h5>
            <HamburgerMenu
              isOpen={false}
              menuClicked={handleClick}
              width={20}
              height={16}
              color="#454444"
              strokeWidth={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
