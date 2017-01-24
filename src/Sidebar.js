import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="sidebar">
        <h1>MY RECIPE BOX</h1>
        <input placeholder="search" />
        <p>RECIPE LIST</p>
        <ul>
        {
          Object
            .keys(recipes)
            // maybe want to separate the map callback
            // into its own function
            .map(key => <li key={key}>
              {console.log(key)}
              <button onClick={
                () => this.props.switchSingle()}>
              {recipes[key].title}

            </button></li>)
        }
        </ul>

      </div>
    )
  }
}


export default Sidebar;
