import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {

  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>


  )
}

export default App;
