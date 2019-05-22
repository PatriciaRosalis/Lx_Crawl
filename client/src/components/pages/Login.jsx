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
        <br />

        <form action="#" className="form">
          <div className="form-group">
          <input placeholder="username" className="mdl-textfield__input form-control" type="text" value={this.state.username} name="username" onChange={this.handleInputChange} /> 
          </div>

          <div className="form-group">
          <input placeholder="password" className="mdl-textfield__input form-control" type="password"  value={this.state.password} name="password" onChange={this.handleInputChange} /> 
         </div> 

          <button type="button" className="btn btn-outline" onClick={this.handleClick}>Login</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}
      </div>
    );
  }
}
