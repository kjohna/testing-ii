import React, { Component } from 'react';

import './App.css';
import Display from './display/Display';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  }
  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes = {this.state.strikes} />
      </div>
    );
  }
}

export default App;
