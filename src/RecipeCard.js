import React, { Component } from 'react';

class RecipeCard extends Component {

  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this);
  }


  handleEdit(e, key) {
    console.log('hello?');
    const recipe = this.props.details;
    console.log(key);
    const editedRecipe = {
      ...recipe,
      title: e.target.innerHTML
    };
    this.props.editRecipe(key, editedRecipe);
  }

  render() {
    const { details } = this.props;

    return (
      <div className="recipe-card">
        <div className="recipe-title"><div className="title-text" name="title" contentEditable={true} onInput={(e) => this.handleEdit(e, this.props.index)}>{details.title}</div>
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
