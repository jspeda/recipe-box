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
    this.renderSingle = this.renderSingle.bind(this);
    this.switchSingle = this.switchSingle.bind(this);
    this.state = {
      recipes: {},
      single: false
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
    const time = Date.now();
    recipes[`recipe-${time}`] = recipe;
    this.setState({recipes});
  }

  removeRecipe(key) {
    const recipes = {...this.state.recipes};
    recipes[key] = null;
    this.setState({ recipes });
  }

  switchSingle() {
    const isSingle = !this.state.single;
    this.setState({ single: isSingle });
  }

  renderSingle(key) {
    return (
      <div>
        <RecipeCard
          key={key}
          index={key}
          details={this.state.recipes[key]}
          removeRecipe={this.removeRecipe}
        />
      </div>
    )
  }

  render() {
    if (!this.single) {
      return (
        <div className="App">
          <div className="main-container">
            <Sidebar recipes={this.state.recipes} switchSingle={this.switchSingle}/>
            <div className="content">
              <Form addRecipe={this.addRecipe}/>
              {
                Object.keys(this.state.recipes)
                  .map(key => <RecipeCard
                    key={key}
                    index={key}
                    details={this.state.recipes[key]}
                    removeRecipe={this.removeRecipe}
                  />)
              }
            </div>
          </div>
        </div>
      );
    }
    else {
      return <div>{this.renderSingle()}</div>
    }

  }
}

export default App;
