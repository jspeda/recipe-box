import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="sidebar">
        <p>MY RECIPE BOX</p>
        <button>add recipe</button>
        <p>RECIPE LIST</p>
        <ul>
        {
          Object
            .keys(recipes)
            // maybe want to separate the map callback
            // into its own function
            .map(key => <li key={key}>{recipes[key].title}</li>)
        }
        </ul>

      </div>
    )
  }
}


export default Sidebar;
