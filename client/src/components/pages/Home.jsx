import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="Home">
          <img src="../title.png" alt="title" />
          <quote> Create and Share pub crawls in Lisbon </quote>
          <img src="../backgroundApp.png" alt="bcg" />
          <Link to="/login"><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Login</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
          <Link to="/about"><p>About Us</p> </Link>
      </div>
    );
  }
}
