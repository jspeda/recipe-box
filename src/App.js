import React, { Component } from 'react';
import Sidebar from './Sidebar';
import RecipeCard from './RecipeCard';
import Form from './Form';
import './App.css';
import base from './base';

class App extends Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    this.state = {
      recipes: {
      }
    }
  }

  componentWillMount() {
    this.ref = base.syncState('/?', {
      context: this,
      state: 'recipes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addRecipe(recipe) {
    const recipes = {...this.state.recipes};
    const timestamp = Date.now();
    recipes[`recipe-${timestamp}`] = recipe;
    this.setState({recipes});
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Sidebar recipes={this.state.recipes}/>
          <div className="content">
            <Form addRecipe={this.addRecipe}/>
            {
              Object.keys(this.state.recipes)
                .map(key => <RecipeCard key={key} index={key} details={this.state.recipes[key]}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
