import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GameDetail from './components/GameDetail';

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
