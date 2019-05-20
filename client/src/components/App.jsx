import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Pubs from './pages/Pubs';// NEW!! TO TEST!!!!!
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import Profile from './pages/Profile';

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
          {/* <Route path="/add-pub" component={AddPub} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}