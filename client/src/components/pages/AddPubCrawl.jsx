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
      pictureURL: "",
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
    const uploadData = new FormData()
    uploadData.append("name", this.state.name)
    uploadData.append("places", JSON.stringify(this.state.places.filter(place => place.namePub.length > 0)))
    uploadData.append("comments", this.state.comments)
    uploadData.append("startDate", this.state.startDate)
    uploadData.append("endDate", this.state.endDate)
    uploadData.append("participants", this.state.participants)
    uploadData.append("picture", this.state.pictureURL)

    api.addPubCrawl(uploadData)
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
          pictureURL: "",
          message: `Your Pub Crawl '${this.state.name}' has been created`
        })
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  handleFileChange=(e)=> {
    console.log("The file added by the use is: ", e.target.files[0])
    this.setState({
      pictureURL: e.target.files[0]
    })
  }

  handleLocation = (place,i) => {
    let copyPlaces = [...this.state.places] // Create a copy of the state

    copyPlaces[i].namePub = place.text // Change the value at position i
    copyPlaces[i].address = place.place_name // Change the value at position i
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
      <div className="AddPubCrawl">
        <Navbar />

        <form className="space">
          <div className="form-row form-act">
            <div className="form-group col-sm-6 col-25">

            <label htmlFor="pubcrawl" className="mdl-textfield__label" className="color-form">Image</label>
              <input type="file" name="picture" class="form-control" onChange={this.handleFileChange}/>

            </div>            
            <div className="form-group col-md-6">            
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
                <AutocompletePlace onSelect={place => this.handleLocation(place,i)} className="mdl-textfield__input form-control" value={place.namePub} />
              </div>
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
