import React from "react";
import { NavLink } from "react-router-dom";
import { CgUserList } from "react-icons/cg";
import { BiCar } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { VscBriefcase } from "react-icons/vsc";
import { ImTree } from "react-icons/im";
import { MdStars } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";

function Menu(props) {
  return (
    <ul>
      <li>
        <NavLink activeClassName="sidebar-link-active" to="/profile">
          <span className="mx-2">
            <CgUserList style={{ fontSize: "25px" }} />
          </span>
          <span className="ml-2 sidebar-link-text">
            Employer Profile{" "}
            <span className="ml-2">
              <RiArrowDropDownLine style={{ fontSize: "30px" }} />
            </span>
          </span>
          <span>
            <GoPrimitiveDot className="active-dot" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="sidebar-link-active" to="/vehicles">
          <span className="mx-2">
            <BiCar style={{ fontSize: "25px" }} />
          </span>
          <span className="ml-2 sidebar-link-text">Onboard Your Vehicles</span>
          <span>
            <GoPrimitiveDot className="active-dot" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="sidebar-link-active" to="/hire-driver">
          <span className="mx-2">
            <FiSearch style={{ fontSize: "25px" }} />
          </span>
          <span className="ml-2 sidebar-link-text">Search & Hire Drivers</span>
          <span>
            <GoPrimitiveDot className="active-dot" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="sidebar-link-active" exact to="/">
          <span className="mx-2">
            <HiOutlineMail style={{ fontSize: "25px" }} />
          </span>
          <span className="ml-2 sidebar-link-text">Inbox</span>
          <span>
            <GoPrimitiveDot className="active-dot" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="sidebar-link-active" to="/recruitment">
          <span className="mx-2">
            <VscBriefcase style={{ fontSize: "25px" }} />
          </span>
          <span className="ml-2 sidebar-link-text">Recruitment</span>
          <span>
            <GoPrimitiveDot className="active-dot" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="sidebar-link-active" to="/my-organizations">
          <span className="mx-2">
            <ImTree style={{ fontSize: "25px" }} />
          </span>
          <span className="ml-2 sidebar-link-text">My Organizations</span>
          <span>
            <GoPrimitiveDot className="active-dot" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="sidebar-link-active" to="rate-drive">
          <span className="mx-2">
            <MdStars style={{ fontSize: "25px" }} />
          </span>
          <span className="ml-2 sidebar-link-text">Rate A Driver</span>
          <span>
            <GoPrimitiveDot className="active-dot" />
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="sidebar-link-active" to="/subscriptions">
          <span className="mx-2">
            <FaMoneyCheck style={{ fontSize: "25px" }} />
          </span>
          <span className="ml-2 sidebar-link-text"> My Subscriptions</span>
          <span>
            <GoPrimitiveDot className="active-dot" />
          </span>
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
