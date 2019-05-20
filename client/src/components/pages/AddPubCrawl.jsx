import React, { Component } from 'react';
import api from '../../api';
import ReactDom from 'react-dom'
import axios from 'axios';
import Navbar from './Navbar'


export default class AddPubCrawl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      places: [{namePub: "Castro", address: "Rua de test"}],
      comments: "",
      startDate: new Date(),
      endDate: new Date(),
      participants: 0,
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.changeNamePub = this.changeNamePub.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name, this.state.description)
    let data = {
      name: this.state.name,
      places: this.state.places, 
      comments: this.state.comments,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      participants: this.state.participants,
    }
    api.addPubCrawl( data )
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: "",
          places: [],
          comments: "",
          startDate: new Date(),
          endDate: new Date(),
          participants: "",
          message: `Your Pub Crawl '${this.state.name}' has been created`
        })
        //setTimeout(() => {
        //  this.setState({
        //    message: null
        //  })
        //}, 2000)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  changeNamePub(e, i) {
    let copyPlaces = [...this.state.places] // Create a copy of the state
    copyPlaces[i].namePub = e.target.value // Change the value at position i
    if (i === this.state.places.length-1) { // If we are modifying the last element, add an extra place
      copyPlaces.push({
        namePub: "",
        address: ""
      })
    }
    this.setState({
      places: copyPlaces
    })
  }
  changeAddress(e, i) {
    let copyPlaces = [...this.state.places] // Create a copy of the state
    copyPlaces[i].address = e.target.value // Change the value at position i
    if (i === this.state.places.length-1) { // If we are modifying the last element, add an extra place
      copyPlaces.push({
        namePub: "",
        address: ""
      })
    }
    this.setState({
      places: copyPlaces
    })
  }
  render() {
    return (
      <div className="AddPubCrawl">
        <Navbar /> 
        <br /> 
        <br /> 
        <h2>Add Pub Crawl</h2>
        <form> 
          Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /> <br />
          Comments: <textarea value={this.state.comments} name="comments" cols="30" rows="10" onChange={this.handleInputChange} ></textarea> <br />
          Start Date: <input type="date" value={this.state.startDate} name="startDate" onChange={this.handleInputChange} /> <br /> 
          End Date: <input type="date" value={this.state.endDate} name="endDate" onChange={this.handleInputChange} /> <br /> 
          Participants: <input type="number" value={this.state.participants} name="participants" onChange={this.handleInputChange} /> <br /> 
          <hr />
          <h3>Places</h3>
          {this.state.places.map((place,i) => <div key={i}>
            Pub name : <input value={place.namePub} onChange={e => this.changeNamePub(e,i)} /> <br/>
            Address : <input value={place.address} onChange={e => this.changeAddress(e,i)}/> <br/>
            <br/>
          </div>)}
          <button onClick={(e) => this.handleClick(e)}>Create Pub Crawl</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}