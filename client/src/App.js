import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {Security, ImplicitCallback} from '@okta/okta-react';
import LoginPage from './components/Auth/LoginPage';

const config = {
    issuer: 'https://dev-138556.oktapreview.com/oauth2/default',
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: '0oadonguv9wUHKGfE0h7'
};

class App extends Component {

  render() {
    return (
        <Router>
          <Security issuer={config.issuer}
                    client_id={config.client_id}
                    redirect_uri={config.redirect_uri}
          >
            <Route path="/login" component={LoginPage}/>
            <Route path='/implicit/callback' component={ImplicitCallback}/>
          </Security>
        </Router>
    );
  }
}

export default App;
