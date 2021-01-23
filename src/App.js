import "./App.css";
import MainHeader from "./components/MainHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import Footer from "./components/Footer";
import { RiSearchLine } from "react-icons/ri";
import { IoFilterCircle } from "react-icons/io5";

function App(props) {
  return (
    <div id="main">
      <div id="content">
        <div>
          <MainHeader />
        </div>
        <SecondaryHeader />
        <div className="main row no-gutters m-0">
          <div className="col-md-3 col-lg-2 main-sidebar"></div>
          <div
            className="col-md-9 col-lg-10 main-content"
            style={{ height: "2000px" }}
          >
            <div className="row h-100 p-3 m-0">
              <div
                className="col-lg-5 h-100 main-content-left"
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
                  <span>
                    <IoFilterCircle
                      style={{ fontSize: "35px", color: "#454444" }}
                    />
                  </span>
                </div>
                <div></div>
              </div>
              <div
                className="col-lg-7 h-100"
                style={{ padding: "0px 14px 0px 2px" }}
              >
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
