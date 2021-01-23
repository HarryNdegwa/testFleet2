import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Chats from "./components/Chats";

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chats" component={Chats} />
      </Switch>
    </div>
  );
}

export default App;
