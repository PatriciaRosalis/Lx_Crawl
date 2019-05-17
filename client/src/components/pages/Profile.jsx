import React, { Component } from 'react';
import api from '../../api';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';

export default class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: []
    }
  }

  render() {
    return (
      <div className="Profile">
        <img src="../beer.svg" alt=""/>
        <h2>Name</h2>
        <h2>My routes</h2>
        <ul>
          <Link to="/:pubCrawlId"><button>Reuse</button></Link>
          <Link to="/:pubCrawlId"><button>Reuse</button></Link>
          <Link to="/:pubCrawlId"><button>Reuse</button></Link>
        </ul>
        <h2>My PubCrawls</h2>
      </div>
    )
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/profile')
      .then(users => {
        console.log(users)
        this.setState({
          users: users
        })
      })
      .catch(err => console.log(err))
  }
}