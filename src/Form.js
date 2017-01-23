import React, { Component } from 'react';

class Form extends Component {

  createRecipe(e) {
    e.preventDefault();
    console.log('fish emoji');
    const recipe = {
      title: this.title.value,
      ingredients: this.ingredients.value,
      instructions: this.instructions.value
    }
    this.props.addRecipe(recipe);
    this.recipeForm.reset();
    console.log(recipe);
  }

  render() {
    return (
      <form ref={(input) => this.recipeForm = input} onSubmit={(e) => this.createRecipe(e)}>
        <div className="recipe-form">
          <div className="form-title-ingredients">
            <input className="form-title" ref={(input) => this.title = input} type="text" placeholder="title" />
            <textarea className="form-ingredients" ref={(input) => this.ingredients = input}
              placeholder="ingredients - (separate items with ;)" />
          </div>
          <div className="form-instructions-submit">
            <textarea className="instructions" ref={(input) => this.instructions = input} placeholder="instructions" />
            <button type="submit">add recipe</button>
          </div>
        </div>
      </form>
    )
  }
};

Form.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
}

export default Form;
