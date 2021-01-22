import "./App.css";
import MainHeader from "./components/MainHeader";
import SecondaryHeader from "./components/SecondaryHeader";
import Footer from "./components/Footer";

function App(props) {
  return (
    <div className="App">
      <MainHeader />
      <SecondaryHeader />
      <Footer />
    </div>
  );
}

export default App;
