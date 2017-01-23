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
      <div className="recipe-form">
        <form ref={(input) => this.recipeForm = input} onSubmit={(e) => this.createRecipe(e)}>
          <input ref={(input) => this.title = input} type="text" placeholder="title" />
          <input ref={(input) => this.ingredients = input} type="text" placeholder="ingredients" />
          <textarea ref={(input) => this.instructions = input} placeholder="instructions" />
          <button type="submit">add recipe</button>
        </form>
      </div>
    )
  }
};

Form.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
}

export default Form;
