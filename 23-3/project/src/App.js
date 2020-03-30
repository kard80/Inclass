import React from 'react';
import './App.css';
import { Route, Redirect, Switch, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Link to = "/index">Home</Link>
      <br />
      <Link to = "/map">Map</Link>
      <br />
      <Link to = "/about">About</Link>
      <br />
      <Link to = "/profile">Profile</Link>

      <Switch>
        <Route exact path="/index" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
        <Route path = "/profile:id" component = {Profile} />
        <Route exact path="/error" component={NotFound} />
        <Redirect to="/error" />
      </Switch>
    </div>
  )
}

export default App