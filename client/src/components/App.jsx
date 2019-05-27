import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddPubCrawl from './pages/AddPubCrawl';// NEW!! TO TEST!!!!!
import EditPubCrawl from './pages/EditPubCrawl';// NEW!! TO TEST!!!!!
import PubCrawlDetail from './pages/PubCrawlDetail';// NEW!! TO TEST!!!!!
import Login from './pages/Login';
import Signup from './pages/Signup';
import api from '../api';
import Profile from './pages/Profile';

export default class App extends Component {

  render() {
    return (
      <div className="App">
    
        <Switch>
          <Route path="/" exact component={Home} />
          {api.isLoggedIn() && <Route path="/add-pubcrawl" component={AddPubCrawl} />}
          <Route path="/pubcrawl-detail/:pubCrawlId" component={PubCrawlDetail} />
          <Route path="/edit-pubcrawl/:pubCrawlId" component={EditPubCrawl} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}