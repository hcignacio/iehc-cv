import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
