import React, { Component } from 'react';

class RecipeCard extends Component {
  render() {
    const { details } = this.props;

    return (
      <div className="recipe-card">
        <div className="recipe-title"><div className="title-text">{details.title}</div>
          <div className="edit-delete"><span><button>edit</button></span><span><button>delete</button></span></div>
        </div>
        <div className="recipe-contents-container">
          <ul className="recipe-ingredients"><li>{details.ingredients}</li></ul>
          <div className="recipe-description">{details.instructions}</div>
        </div>
      </div>
    )
  }
}

export default RecipeCard;
