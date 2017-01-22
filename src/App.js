import React, { Component } from 'react';
import Sidebar from './Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Sidebar />
          <div className="content"></div>
        </div>
      </div>
    );
  }
}

export default App;
