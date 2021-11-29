import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Projects from './pages/Projects/Projects.jsx'
import Skills from './pages/Skills/Skills.jsx'
import About from './pages/About/About.jsx'
import Nav from './pages/Nav/Nav.jsx'
import Home from './pages/Home/Home.jsx'
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
  
  render(){
    return (
      <div className="App">
      <Nav />
      <Switch>
        <Route path = '/home' render={(props) => ( <Home {...props}/> )}/>
        <Route path = '/projects' render={(props) => ( <Projects {...props}/> )}/>
        <Route path = '/skills' render={(props) => ( <Skills {...props}/> )}/>
        <Route path = '/about' render={(props) => ( <About {...props}/> )}/>
        <Redirect to="/home"/>
      </Switch>
      </div>
    );
  } 
} 

