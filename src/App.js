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
      </div>
      <Footer />
    </div>
  );
}

export default App;
