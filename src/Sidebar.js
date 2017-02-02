import React, { Component } from 'react';
import gh from './gh.png'

class Sidebar extends Component {
  constructor() {
    super();
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      search: ''
    };
  }

  handleSearchChange(searchTerm) {
    this.setState({ search: searchTerm });
    console.log(this.state.search);
  }


  render() {
    const { recipes } = this.props;
    return (
      <div className="sidebar">
        <h1>MY RECIPE BOX</h1>
        <input
          className="searchbar"
          placeholder="search"
          onChange={(e) => this.handleSearchChange(e.target.value)}
          value={this.state.search}
         />
        <p>RECIPE LIST</p>
        <div className="sidebar-button-list">
          <ul>
          {
            Object
              .keys(recipes)
              .filter((key) => `${recipes[key].title}`.toUpperCase()
              .indexOf(this.state.search.toUpperCase()) >= 0)
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
        <div className="footer">
          created by jspeda
          <a href="https://www.github.com/jspeda"><img src={gh} className="github" alt="github" /></a>
        </div>
      </div>
    )
  }
}


export default Sidebar;
