import React, { Component } from 'react';
import api from '../../api';
import Navbar from './Navbar';
import AutocompletePlace from "../../Autocomplete";
import '../../styles/pubcrawlForms.scss';


export default class AddPubCrawl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      places: [{ namePub: "", address: "" }],
      comments: "",
      startDate: new Date(),
      endDate: new Date(),
      participants: 0,
      message: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    //this.changeNamePub = this.changeNamePub.bind(this)
     //this.changeAddress = this.changeAddress.bind(this)
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
      places: this.state.places,
      comments: this.state.comments,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      participants: this.state.participants,
    }
    api.addPubCrawl(data)
      .then(result => {
        this.props.history.push('/profile')
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
      })
      .catch(err => this.setState({ message: err.toString() }))
  }
  // changeNamePub(e, i) {
  //   let copyPlaces = [...this.state.places] // Create a copy of the state
  //   console.log("HEEEEELLLOOOOOOSSS",copyPlaces)
  //   copyPlaces[i].namePub = e.target.value // Change the value at position i
  //   if (i === this.state.places.length - 1) { // If we are modifying the last element, add an extra place
  //     copyPlaces.push({
  //       namePub: "",
  //       address: ""
  //     })
  //   }
  //   this.setState({
  //     places: copyPlaces
  //   })
  // }
  // changeAddress(e, i) {
  //   let copyPlaces = [...this.state.places] // Create a copy of the state
  //   copyPlaces[i].address = e.target.value // Change the value at position i
  //   if (i === this.state.places.length - 1) { // If we are modifying the last element, add an extra place
  //     copyPlaces.push({
  //       namePub: "",
  //       address: ""
  //     })
  //   }
  //   this.setState({
  //     places: copyPlaces
  //   })
  // }

  handleLocation = (place) => {
    console.log("PPLLAAAAAAACCEEE",place)
    let newPlace = {namePub: place.text, address: place.place_name }
    this.setState({
      places : [...this.state.places, newPlace]
    })
  }
  render() {
    return (
      <div className="AddPubCrawl">
        <Navbar />

        <form className="space">
          <div className="form-row form-act">
            <div className="form-group col-sm-6 col-25">
              <label htmlFor="pubcrawl" className="mdl-textfield__label" className="color-form">PubCrawl Name</label>
              <input className="mdl-textfield__input form-control" id="name" type="text" value={this.state.name} name="name" onChange={this.handleInputChange} placeholder="Pub Crawl Name..." />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="sdate" className="mdl-textfield__label" className="color-form ">Start Date</label>
              <input className="mdl-textfield__input form-control" id="sdate" name="startDate" type="date" value={this.state.startDate} onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="eDate" className="mdl-textfield__label" className="color-form">End Date</label>
              <input className="mdl-textfield__input form-control" id="edate" name="endDate" type="date" value={this.state.endDate} onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="participant" className="mdl-textfield__label" className="color-form">Participants</label>
              <input className="mdl-textfield__input form-control" id="participant" type="number" value={this.state.participants} name="participants" onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="comments" className="mdl-textfield__label" className="color-form">Comments</label>
              <textarea className="form-control" id="comments" name="comments" placeholder="Comments" value={this.state.comments} /*name="comments"*/ cols="40" rows="3" onChange={this.handleInputChange} ></textarea >
            </div>
            <h4>Places</h4>

            {this.state.places.map((place, i) => <div className="form-group col-md-6" key={i}>
              <div>
                <label htmlFor="namePub" className="mdl-textfield__label" className="label color-form">Pub Name</label>
                <AutocompletePlace onSelect={this.handleLocation} className="mdl-textfield__input form-control" value={place.namePub} />
              </div>
              {/* <div className="">
                 <label className="mdl-textfield__label" htmlFor="address" className="label color-form">Address </label> 
                 <AutocompletePlace onSelect={place => this.handleLocation(place.address)} className="mdl-textfield__input form-control" value={place.address} onChange={e => this.changeAddress(e, i)}  />
                </div> */}
              </div>)} 
            <button className="btn" id="createPub" onClick={(e) => this.handleClick(e)}>Create</button>
          </div>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    )
  }
}