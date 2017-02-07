import React, { Component } from 'react';
import base from './base'

class Splash extends Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.state = {
      uid: null
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

  authHandler(err, authData) {
    console.log(authData);
    if(err){
      console.log(err);
      return;
    }

    const userRef = base.database().ref(this.props.recipes);
    userRef.once('value', (snapshot) => {
      this.setState({
        uid: authData.user.uid
      })
    })
  }

  renderLogin() {
    return (
      <div className='login'>
        sign in!
        <button className="google" onClick={() => this.authenticate('google')}>
          sign in with google
        </button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>WELCOME TO RECIPE BOX</h1>
        {this.renderLogin()}
      </div>
    )
  }
}


export default Splash;
