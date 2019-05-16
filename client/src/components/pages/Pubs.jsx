import React, { Component } from 'react';
import api from '../../api';

export default class Pubs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pubs: []
    }
  }
  render() {
    return (
      <div className="Pubs">
        <h2>List of pubs</h2>
        {this.state.pubs.map(pub => <li key={pub._id}>{pub.name}</li>)}
      </div>
    );
  }
  componentDidMount() {
    api.getPubs()
      .then(pubs => {
        console.log("THE PUBS",pubs)
        this.setState({
          pubs: pubs
        })
      })
      .catch(err => console.log(err))
  }
}