/////client/src/components/EditPubCrawl/////////////////

import React, { Component } from 'react';
import api from '../../api';
import Navbar from './Navbar'
import AutocompletePlace from "../../Autocomplete";

export default class EditPubCrawl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      places: [],
      comments: "",
      startDate: new Date(),
      endDate: new Date(),
      participants: 0,
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.changeNamePub = this.changeNamePub.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state.name)
    let data = {
      name: this.state.name,
      places: this.state.places.filter(place => place.namePub.length > 0),
      comments: this.state.comments,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      participants: this.state.participants,
    }
    api.editPubCrawl(this.props.match.params.pubCrawlId, data)
      .then(result => {
        console.log('SUCCESS!')
        this.setState({
          name: "",
          places: [],
          comments: "",
          startDate: new Date(),
          endDate: new Date(),
          participants: "",
          message: `Your Pub Crawl '${this.state.name}' has been Edited`
        })
        this.props.history.push(`/pubcrawl-detail/` + this.props.match.params.pubCrawlId)
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  changeNamePub(place, i) {
    let copyPlaces = [...this.state.places] // Create a copy of the state

    copyPlaces[i].namePub = place.text // Change the value at position i
    copyPlaces[i].address = place.place_name // Change the value at position i
    copyPlaces[i].location = {coordinates: place.center}  // Change the value at position i
    if (i === this.state.places.length - 1) { // If we are modifying the last element, add an extra place
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
      <div className="EditPubCrawl">
        <Navbar />

        <form className="space">
        <div className="form-row form-act">
        <h3>Edit Pub Crawl</h3>
          <div className="form-group col-sm-6 col-25">
            <label className="mdl-textfield__label" htmlFor="name" className="label color-form">Name:</label>
            <input  className="mdl-textfield__input form-control" type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /> <br />
          </div>
          <div className="form-group col-md-6">
            <label className="mdl-textfield__label" htmlFor="comments" className="label color-form">Comments:</label>
            <textarea className="mdl-textfield__input form-control" value={this.state.comments} name="comments" cols="40" rows="3" onChange={this.handleInputChange} ></textarea> <br />
          </div>
          <div className="form-group col-md-6">
            <label className="mdl-textfield__label" htmlFor="sdate" className="label color-form">Start Date:</label>
            <input  className="mdl-textfield__input form-control"  type="date" value={this.state.startDate} name="startDate" onChange={this.handleInputChange} /> <br />
          </div>
          <div className="form-group col-md-6">
            <label className="mdl-textfield__label" htmlFor="edate" className="label color-form">End Date:</label>
            <input className="mdl-textfield__input form-control"  type="date" value={this.state.endDate} name="endDate" onChange={this.handleInputChange} /> <br />
          </div>
          <div className="form-group col-md-6"> 
            <label className="mdl-textfield__label" htmlFor="participants" className="label color-form">Participants:</label>
            <input className="mdl-textfield__input form-control"  type="number" value={this.state.participants} name="participants" onChange={this.handleInputChange} /> <br />
          </div>
          <h3>Places</h3>
          {this.state.places.map((place, i) => <div className="form-group col-md-6" key={i}>
            <div className="">
              <label className="mdl-textfield__label" htmlFor="participants" className="label color-form">Pub name:</label>
              <AutocompletePlace initialValue={place.namePub} onSelect={place => this.changeNamePub(place, i)}  />
            </div>
          </div>)}
          <button className="btns" onClick={(e) => this.handleClick(e)}>Edit Pub Crawl</button>
          </div>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
  componentDidMount() {
    api.getOnePubCrawl(this.props.match.params.pubCrawlId)
      .then(pubCrawl => {
        console.log("RESPONSE FROM API", pubCrawl)
        this.setState({
          pubCrawl: pubCrawl,
          name: pubCrawl.name,
          places: pubCrawl.places,
          comments: pubCrawl.comments,
          startDate: pubCrawl.startDate,
          endDate: pubCrawl.endDate,
          participants: pubCrawl.participants,
        })
      })
      .catch((err) => {
        console.log("The following error is showing", err)
      })
  }
}