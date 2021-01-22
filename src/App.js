import "./App.css";
import MainHeader from "./components/MainHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import Footer from "./components/Footer";

function App(props) {
  return (
    <div id="main">
      <div id="content">
        <MainHeader />
        <SecondaryHeader />
        <div className="main row no-gutters">
          <div className="col-md-3 col-lg-2 main-sidebar"></div>
          <div className="col-md-9 col-lg-10 main-content"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
