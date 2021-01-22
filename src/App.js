import "./App.css";
import MainHeader from "./components/MainHeader";
import SecondaryHeader from "./components/SecondaryHeader";

function App(props) {
  return (
    <div className="App">
      <MainHeader />
      <SecondaryHeader />
    </div>
  );
}

export default App;
