import React, { Component } from 'react';

import './App.css';
import Display from './display/Display';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  }

  countStrike = () => {
    let updatedStrikes = this.state.strikes;
    updatedStrikes ++;
    if(updatedStrikes > 3) {
      updatedStrikes = 0;
    }
    this.setState({
      ...this.state,
      strikes: updatedStrikes
    });
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes = {this.state.strikes} />
        <Dashboard countStrike={this.countStrike} />
      </div>
    );
  }
}

export default App;
