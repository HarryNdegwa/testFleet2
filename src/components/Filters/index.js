import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import "./style.css";

function Filters(props) {
  return (
    <div className="filters">
      <div className="filter-header"></div>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          aria-label="Text input with dropdown button"
        />
        <div className="input-group-append">
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
      </div>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          aria-label="Text input with dropdown button"
        />
        <div className="input-group-append">
          <span>
            <RiArrowDownSLine />
          </span>
        </div>
      </div>
      <button className="btn">Apply Filters</button>
    </div>
  );
}

export default Filters;
