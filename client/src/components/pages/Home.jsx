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
          <img className="title" src="../title.png" alt="title" />
          <p> Create and Share pub crawls in Lisbon </p>
          <img src="../backgroundApp.png" alt="bcg" />
          <Link to="/login"><button className="mdl-button mdl-js-button mdl-button--accent">Login</button></Link>
          <Link to="/signup"><button className="mdl-button mdl-js-button mdl-button--accent">Sign Up</button></Link>
          <Link className="about" to="/about">About Us</Link>
      </div>
    );
  }
}
