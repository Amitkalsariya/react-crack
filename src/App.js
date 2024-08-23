

import React from "react";
import Login from './Login';

import Sub from './Pages/Sub';
import Queue from './Pages/Queue';
import Dashboard from './Pages/Dashboard';  
import Category from './Pages/Category';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import MainHeader from "./Pages/MainHeader";

function App() {
  return (
    <div className="App">
     
       {/* <Router>
       <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Category" component={Category} />
            <Route path="/Sub" component={Sub} />
            <Route path="/Queue" component={Queue} />
          </Switch>
          
       </Router>   */}
       <MainHeader></MainHeader>
    </div>
  );
}

export default App;
