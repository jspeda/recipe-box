import React, { Component } from 'react';
import Sidebar from './Sidebar';
import RecipeCard from './RecipeCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: {}
    }
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Sidebar />
          <div className="content">
            {
              Object.keys(this.state.recipes)
                .map(key => <RecipeCard />)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
