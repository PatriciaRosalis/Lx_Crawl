import React, { Component } from 'react';
import api from '../../api';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import Navbar from './Navbar'
// import '../../../src/profile.scss';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  render() {
    return (
      <div className="Profile">
        <Navbar />
        <div className="_container">
          <div className="_1container">
            <img className="img" src="../beer.svg" alt="" />
            <h4>Name</h4>
          </div>
          <div className="_2container">
            <h5>My Routes</h5>
              <p>Lorem ipsum <Link to="/:pubCrawlId"><button className="btn">REUSE</button></Link></p>
              <p>Lorem ipsum <Link to="/:pubCrawlId"><button className="btn">REUSE</button></Link></p>
              <p>Lorem ipsum <Link to="/:pubCrawlId"><button className="btn">REUSE</button></Link></p>
          </div>
        </div>

        <div className="_3container">
          <div>
            
            <h4>My Pub Crawls</h4>
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h3 className="mdl-card__title-text">Lorem ipsum</h3>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates</a>
              </div>
            </div>

            <h4>Public Pub Crawls</h4>
            <div className="demo-card-square mdl-card mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card--expand">
                <h3 className="mdl-card__title-text">Lorem ipsum</h3>
              </div>
              <div className="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.
              </div>
              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Updates</a>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api')
      .then(users => {
        console.log(users)
        this.setState({
          users: users
        })
      })
      .catch(err => console.log(err))
  }
}