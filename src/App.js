import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Simon from './Game/Simon';

class App extends Component {
  render() {
    Simon();
    return (
      <div id="myCanvas">
        
      </div>
    );
  }
}

export default App;
