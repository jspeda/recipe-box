import React, { Component } from 'react';

class RecipeCard extends Component {

  render() {
    const { details } = this.props;

    return (
      <div className="recipe-card">
        <div className="recipe-title"><div className="title-text">{details.title}</div>
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
