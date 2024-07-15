import logo from './logo.svg';
import './App.css';
import React from "react";
import Login from './Login';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <Header></Header>
      

      {/* <Router>
        <Switch>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
