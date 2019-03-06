import React, { Component } from 'react';

import './App.css';
import Display from './display/Display';
import Dashboard from './dashboard/Dashboard';

import { strikeCounter, ballCounter, recordHit, recordFoul } from './dashboard/dashboard-helpers';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    hit: false,
  }

  countStrike = () => {
    const updatedState = strikeCounter(this.state);

    this.setState(updatedState);
  };

  countBall = () => {
    const updatedState = ballCounter(this.state);

    this.setState(updatedState);
  };

  countHit = () => {
    const updatedState = recordHit(this.state);

    this.setState(updatedState);
  }

  countFoul = () => {
    const updatedState = recordFoul(this.state);

    this.setState(updatedState);
  }

  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes = {this.state.strikes} />
        <Dashboard 
          countStrike={this.countStrike} 
          countBall={this.countBall} 
          countHit={this.countHit} 
          countFoul={this.countFoul}
        />
        <div data-testid="hit-display">{this.state.hit && "Hit!"}</div>
      </div>
    );
  }
}

export default App;
