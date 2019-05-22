import React, { Component } from 'react';
import api from '../../api';

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      name: "",
      password: "",
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/profile") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Signup">
        <img className="sign-title" src="../../../backgroundApp.png" alt="bcg" />
        <img src="/titlenoflag.png" alt="pubcrawl" width="100px" />
        <br />
        <form action="#" className="form">
          <div className="form-group">
            <input placeholder="username" className="mdl-textfield__input form-control" type="text" value={this.state.username} name="username" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <input placeholder="name" className="mdl-textfield__input form-control" type="text" value={this.state.name} name="name" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <input placeholder="password" className="mdl-textfield__input form-control" type="password" value={this.state.password} name="password" onChange={this.handleInputChange} />
          </div>
          <button variant="contained" color="primary" className="btn btn-outline" onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
        {this.state.message && <div className="info info-danger">
          {this.state.message}
        </div>}

      </div>
    );
  }
}