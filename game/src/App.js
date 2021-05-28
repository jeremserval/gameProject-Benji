import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import GameDetail from "./components/GameDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/GameDetail">
          <GameDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
