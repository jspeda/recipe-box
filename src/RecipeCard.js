import React, { Component } from 'react';

class RecipeCard extends Component {
  render() {
    return (
      <div className="recipe-card">
        <div className="recipe-title"><div className="title-text">DUMP MEALS</div>
          <div className="edit-delete"><span><button>edit</button></span><span><button>delete</button></span></div>
        </div>
        <div className="recipe-contents-container">
          <ul className="recipe-ingredients"><li>dump chicken</li></ul>
          <div className="recipe-description">dump the chicken on to the plate</div>
        </div>
      </div>
    )
  }
}

export default RecipeCard;
