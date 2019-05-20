import React, { Component } from 'react';
import api from '../../api';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    api.login(this.state.username, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/profile") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Login">
        <img className="sign-title" src="../../../backgroundApp.png" alt="bcg" />
        <img src="/titlenoflag.png" alt="pubcrawl" width="100px" />
        <form action="#" className="form">
          <div className="mdl-textfield mdl-js-textfield form-input">
          <input className="mdl-textfield__input" type="text" value={this.state.username} name="username" onChange={this.handleInputChange} /> 
          <label className="mdl-textfield__label" for="username">Username</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="password"  value={this.state.password} name="password" onChange={this.handleInputChange} /> 
          <label className="mdl-textfield__label" for="password">Password</label>
         </div> 
          <button className="mdl-button mdl-js-button mdl-button--accent log-btn  " onClick={this.handleClick}>Login</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}
