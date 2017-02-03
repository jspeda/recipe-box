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
    this.removeRecipe = this.removeRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.scrollToRecipe = this.scrollToRecipe.bind(this);
    this.state = {
      recipes: {},
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

  editRecipe(key, editedRecipe) {
    const recipes = {...this.state.recipes};
    recipes[key] = editedRecipe;
    console.log(recipes[key]);
    this.setState({recipes});
  }

  removeRecipe(key) {
    const recipes = {...this.state.recipes};
    recipes[key] = null;
    this.setState({ recipes });
  }

  scrollToRecipe(key) {
    const e = document.getElementById(key);
    e.scrollIntoView();
  }


  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Sidebar
            recipes={this.state.recipes}
            scrollToRecipe={this.scrollToRecipe}
          />
          <div className="content">
            <Form addRecipe={this.addRecipe}/>
            <div className="list-of-recipes">
              {
                Object.keys(this.state.recipes)
                  .map(key => <RecipeCard
                    key={key}
                    index={key}
                    details={this.state.recipes[key]}
                    removeRecipe={this.removeRecipe}
                    editRecipe={this.editRecipe}
                  />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
