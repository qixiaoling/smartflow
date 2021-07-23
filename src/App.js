import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Project from "./Project";

function App() {

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about-me' exact component={AboutMe}/>
                <Route path='/project' exact component={Project}/>
            </Switch>
        </Router>


    )
}

export default App;
