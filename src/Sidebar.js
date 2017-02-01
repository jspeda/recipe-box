import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="sidebar">
        <h1>MY RECIPE BOX</h1>
        <input placeholder="search" />
        <p>RECIPE LIST</p>
        <div className="sidebar-button-list">
          <ul>
          {
            Object
              .keys(recipes)
              .map(key => <li key={key}>
                <div className="sidebar-button-container">
                <button
                  onClick={() => this.props.scrollToRecipe(key)}
                  className="sidebar-button"
                  >
                {recipes[key].title}
              </button></div></li>)
          }
          </ul>
        </div>
      </div>
    )
  }
}


export default Sidebar;
