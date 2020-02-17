import React from "react";
import {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppClock from "./components/AppClock";
import LoginPage from "./containers/LoginPage";
import App from "./App.js";

export default class Routes extends Component {
render(){
  return (
    <Router>
      <div>
        <header className="App-header">
          <h1 class="app-title">
            Pomodoro Clock
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">SIGN UP!</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
        
        <footer>
        </footer>

      </div>
    </Router>
  )}
}
