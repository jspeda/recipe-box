import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Splash from './Splash';
import './index.css';


const Root = () => {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Splash} />
          <Route exact path="/:userId" component={App} />
        </div>
      </Router>
    )
}


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
