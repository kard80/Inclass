import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Footer from './login/Footer'
import LeftBody from './login/LeftBody'
import Navbar from './login/Navbar'
import RightBody from './login/RightBody'
import LoginPage from './login/LoginPage'
import Homepage from './Homepage/Homepage'

function App() {
  return (
    <Switch>
      <Route exact path = "/nav" component = {Navbar} />
      <Route exact path = "/login" component = {LoginPage} />
      <Route exact path = "/home" component = {Homepage} />
    </Switch>
  );
}

export default App;