import React, { Component } from 'react';
import './App.css';
import Wrap from './Wrap';
import WrapChild from './WrapChild';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Give thyself time to learn something new and good, and cease to be whirled around.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Wrap/>
        <WrapChild/>
      </div>
    );
  }
}

export default App;
