import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BowlPool from './components/BowlPool';
import WinsBar from './components/WinsBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World!
          </p>
        </header>
        <WinsBar />
      </div>
    );
  }
}

export default App;
