import React, { Component } from 'react';
import base from './base';
import gh from './gh.png';

class Sidebar extends Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    base.onAuth(user => {
      if(user) {
        this.authHandler(null, { user });
      }
    })
  }

  authenticate(provider) {
    console.log(`trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData);
    if(err){
      console.error(err);
      return;
    }

    this.props.setUser(authData.user.uid)

  }

  renderLogin() {
    return (
      <div className='login'>
        <button className="google" onClick={() => this.authenticate('google')}>
          sign in with google
        </button>
      </div>
    )
  }

  handleSearchChange(searchTerm) {
    this.setState({ search: searchTerm });
    console.log(this.state.search);
  }


  render() {

    if (!this.props.uid) {
      return <div>{this.renderLogin()}</div>
    }
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
