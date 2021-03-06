import React, { useState } from "react";
import "./style.css";
import MainHeader from "../MainHeader";
import SecondaryHeader from "../SecondaryHeader";
import Footer from "../Footer";
import { RiSearchLine } from "react-icons/ri";
import { IoFilterCircle } from "react-icons/io5";
import Profile from "../Profile";
import { FiPlus } from "react-icons/fi";
import LgChats from "../LgChats";
import Menu from "../../Menu";
import Filters from "../Filters";

const data = [
  { active: true, count: true },
  { active: false, count: false },
  { active: false, count: true },
  { active: false, count: true },
  { active: false, count: false },
  { active: false, count: true },
];

function Home(props) {
  const [showMainFilter, setshowMainFilter] = useState(false);
  const [showMainSubFilter1, setshowMainSubFilter1] = useState(false);
  const [showMainSubFilter2, setshowMainSubFilter2] = useState(false);

  const handleFilterClick = () => {
    setshowMainFilter(!showMainFilter);
  };

  return (
    <div id="main">
      <div id="content">
        <div>
          <MainHeader />
        </div>
        <SecondaryHeader />
        <div className="main row no-gutters m-0">
          <div className="col-md-3 col-lg-2 main-sidebar">
            <div className="sidebar-menu">
              <Menu />
            </div>
          </div>
          <div className="col-md-9 col-lg-10 main-content">
            <div className="row px-3 m-0 wrapper">
              <div
                className="col-lg-5 main-content-left"
                style={{ paddingLeft: "10px" }}
              >
                <div className="search-wrapper">
                  <span className="input-group">
                    <div className="input-group-prepend mr-1">
                      <span>
                        <RiSearchLine
                          style={{ fontSize: "30px", color: "#454444" }}
                        />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search users,messages or chat id's"
                    />
                  </span>{" "}
                  <span className="filter-icon-wrapper">
                    <IoFilterCircle
                      style={{ fontSize: "35px", color: "#454444" }}
                      onClick={handleFilterClick}
                    />
                    {showMainFilter ? (
                      <Filters
                        showMainSubFilter1={showMainSubFilter1}
                        setshowMainSubFilter1={setshowMainSubFilter1}
                        showMainSubFilter2={showMainSubFilter2}
                        setshowMainSubFilter2={setshowMainSubFilter2}
                      />
                    ) : null}
                  </span>
                </div>
                <div className="profiles-wrapper">
                  {data.map((data, idx) => (
                    <Profile data={data} />
                  ))}
                  {/* <Profile />
                  <Profile />
                  <Profile />
                  <Profile />
                  <Profile />
                  <Profile /> */}
                </div>
              </div>
              <div className="col-lg-7" style={{ padding: "0px 14px 0px 2px" }}>
                <div className="lg-new-chat">
                  <button className="btn lg-new-chat-btn">
                    <FiPlus /> Start a new chat
                  </button>
                </div>
                <div>
                  <LgChats />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
