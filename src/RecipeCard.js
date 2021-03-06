import React, { Component } from 'react';

class RecipeCard extends Component {

  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e, key, recipeProperty) {
    const recipe = this.props.details;
    console.log(key);
    var editedRecipe = {
      ...recipe,
      [recipeProperty]: e.target.innerText
    };
    this.props.editRecipe(key, editedRecipe);
  }

  render() {
    const { details } = this.props;

    return (
      <div className="recipe-card" id={this.props.index}>
        <div className="recipe-title">
          <div
            className="title-text"
            contentEditable={true}
            onInput={(e) => this.handleEdit(e, this.props.index, "title")}><mark>{details.title}</mark>
          </div>
          <div className="edit-delete">
          <span><button onClick={() => this.props.removeRecipe(this.props.index)}>delete</button></span></div>
        </div>
        <div className="recipe-contents-container">
          <ul
            className="recipe-ingredients">
            {
            details.ingredients
              .split(';')
              .map((item) => <li
                contentEditable={true}
                onBlur={(e) => this.handleEdit(e, this.props.index, "ingredients")} key={item}>{item}</li>)
            }
          </ul>
          <div
            className="recipe-description"
            contentEditable={true}
            onInput={(e) => this.handleEdit(e, details.index, "instructions")}>{details.instructions}
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeCard;
