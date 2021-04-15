import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GameDetail from './components/GameDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/GameDetail/:id">
          <GameDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
