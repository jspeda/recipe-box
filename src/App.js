import React, { Component } from 'react';
import Sidebar from './Sidebar';
import RecipeCard from './RecipeCard';
import Form from './Form';
import './App.css';
import base from './base';
import Modal from 'react-modal';

class App extends Component {
  constructor() {
    super();
    this.addRecipe = this.addRecipe.bind(this);
    this.removeRecipe = this.removeRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      recipes: {},
      modalIsOpen: false
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
    console.log('??????????')
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

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="My Modal"
          >
            <Form />
        </Modal>
        <div className="main-container">
          <Sidebar recipes={this.state.recipes}/>
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
                    openModal={this.openModal}
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
