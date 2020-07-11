import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { MainNavbar } from './Components/MainNavbar/MainNavbar'
import Home from "./Screens/Home/Home";
import Projects from './Screens/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Switch>
          <Route exact path="/iehc-cv/" component={Home} />
          <Route path="/iehc-cv/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
