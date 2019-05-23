import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = null;
  // }
  render() {
    return (
      <div className="Home">
          <img className="title" src="../title.png" alt="title" />
          <p> Create and Share pub crawls in Lisbon </p>
          <img src="../test.png" alt="bcg" />
          <Link to="/login"><button type="button" className="btn btn-outline" >Login</button></Link>
          <Link to="/signup"><button type="button" className="btn btn-outline" >Sign Up</button></Link>
      </div>  
    );
  }
}
