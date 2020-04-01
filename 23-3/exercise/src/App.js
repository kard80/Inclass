import React, { Component } from 'react';
import './App.css';
import Board from './pages/firstPage'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  state = {
    input: "",
    radar: []
  }

  changeInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  addInput = () => {
    this.setState({
      radar: [...this.state.radar, this.state.input],
      input: ""
    })
  }

  delInput = word => {
    this.setState({
      radar: this.state.radar.filter(items => word.key !== items.key)
    })
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.input} onChange={this.changeInput.bind(this)} ></input>
        <button onClick={this.addInput.bind(this)}>Add</button>
        <ul>
          {this.state.radar.map(item => <li key = {item.id}>{item} <button onClick = {this.delInput.bind(this)}>Del</button> </li>)}
          
        </ul>
        <button onClick = {() => {this.setState({radar: []})}}>Delete all</button>
      </div>
    )
  }
}

export default App;
