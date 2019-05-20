import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddPubCrawl from './pages/AddPubCrawl';// NEW!! TO TEST!!!!!
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
    
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/pubs" exact component={Pubs} /> */}
          <Route path="/" component={AddPubCrawl} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}