import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import "./style.css";

function Filters(props) {
  const {
    showMainSubFilter1,
    setshowMainSubFilter1,
    showMainSubFilter2,
    setshowMainSubFilter2,
  } = props;

  const handleSubFilter1Click = () => {
    if (showMainSubFilter2) {
      setshowMainSubFilter1(true);
      setshowMainSubFilter2(false);
    } else {
      setshowMainSubFilter1(!showMainSubFilter1);
    }
  };

  const handleSubFilter2Click = () => {
    if (showMainSubFilter1) {
      setshowMainSubFilter2(true);
      setshowMainSubFilter1(false);
    } else {
      setshowMainSubFilter2(!showMainSubFilter2);
    }
  };
  return (
    <div className="filters">
      <div className="filter-header">
        <div>
          <h5>
            <b>Filters</b>
          </h5>
        </div>
      </div>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Message status"
        />
        <div className="input-group-append">
          <span onClick={handleSubFilter1Click}>
            <RiArrowDownSLine style={{ fontSize: "30px" }} />
          </span>
        </div>
        {showMainSubFilter1 ? (
          <div className="subfilter1">
            <ul>
              <li>Read messages</li>
              <li>Unread messages</li>
              <li>Openned but not responded</li>
              <li>Ongoing discussion</li>
              <li>Ended discussion</li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Time of messages"
        />
        <div className="input-group-append">
          <span onClick={handleSubFilter2Click}>
            <RiArrowDownSLine style={{ fontSize: "30px" }} />
          </span>
        </div>
        {showMainSubFilter2 ? (
          <div className="subfilter2">
            <ul>
              <li>Last hour</li>
              <li>12 hrs ago</li>
              <li>Today</li>
              <li>This week</li>
              <li>This month</li>
              <li>This year</li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="text-left" className="apply-filters-btn-wrapper">
        <button className="btn">Apply Filters</button>
      </div>
    </div>
  );
}

export default Filters;
