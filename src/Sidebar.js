import React, { Component } from 'react';
import base from './base';

class Sidebar extends Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      uid: null,
    }
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

  logout() {
    base.unauth();
    this.setState({ uid: null});
  }

  authHandler(err, authData) {
    console.log(authData);
    if (err){
      console.error(err);
      return;
    }
    const userRef = base.database().ref(this.props.recipes);
    userRef.once('value', (snapshot) => {

      this.setState({
        uid: authData.user.uid,
      })
    });

  }

  renderLogin() {
    return(
      <div className="login">
        sign in!
        <button className="google" onClick={() => this.authenticate('google')}>
          Log in with Google
        </button>
      </div>
    )
  }

  render() {
    const logout = <button onClick={this.logout}>log out</button>
    const { recipes } = this.props;
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }
    return (
      <div className="sidebar">
        <h1>MY RECIPE BOX</h1>
        {logout}
        <input placeholder="search" />
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
