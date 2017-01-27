import React, { Component } from 'react';

class RecipeCard extends Component {

  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this);
  }


  // can just make handleEdit take in a parameter for whichever recipe property to edit actually...
  handleEdit(e, key, recipeProperty) {
    console.log('hello?');
    const recipe = this.props.details;
    console.log(key);
    const property = recipeProperty
    var editedRecipe = {
      ...recipe,
      [recipeProperty]: e.target.innerHTML
    };
    this.props.editRecipe(key, editedRecipe);
  }

  render() {
    const { details } = this.props;

    return (
      <div className="recipe-card">
        <div className="recipe-title"><div className="title-text" contentEditable={true} onInput={(e) => this.handleEdit(e, this.props.index, "title")}>{details.title}</div>
          <div className="edit-delete"><span><button>edit</button></span>
          <span><button onClick={() => this.props.removeRecipe(this.props.index)}>delete</button></span></div>
        </div>
        <div className="recipe-contents-container">
          <ul className="recipe-ingredients">
            {
            details.ingredients
              .split(';')
              .map((item) => <li key={item}>{item}</li>)
            }
          </ul>
          <div className="recipe-description">{details.instructions}</div>
        </div>
      </div>
    )
  }
}

export default RecipeCard;
