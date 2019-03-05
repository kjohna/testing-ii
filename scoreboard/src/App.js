import React, { Component } from 'react';

import './App.css';
import Display from './display/Display';
import Dashboard from './dashboard/Dashboard';

import { strikeCounter, ballCounter } from './dashboard/dashboard-helpers';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  }

  countStrike = () => {
    const updatedState = strikeCounter(this.state);

    this.setState(updatedState);
  };

  countBall = () => {
    const updatedState = ballCounter(this.state);

    this.setState(updatedState);
  };

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes = {this.state.strikes} />
        <Dashboard countStrike={this.countStrike} countBall={this.countBall} />
      </div>
    );
  }
}

export default App;
