import React, { Component } from 'react';
import api from '../../api';
import Navbar from './Navbar'
import '../../styles/pubcrawlForms.scss';


export default class AddPubCrawl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      places: [{ namePub: "Castro", address: "Rua de test" }],
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
  changeNamePub(e, i) {
    let copyPlaces = [...this.state.places] // Create a copy of the state
    copyPlaces[i].namePub = e.target.value // Change the value at position i
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
  changeAddress(e, i) {
    let copyPlaces = [...this.state.places] // Create a copy of the state
    copyPlaces[i].address = e.target.value // Change the value at position i
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
        {/* <Navbar />  */}
        <br />
        <h2>Add Pub Crawl</h2>
        <div className="containerAddPub">
          <form action="action_page.php" className="form-act">
            <div className="space">
              <div className="col-25">
                <label for="fname" className="label color-form">PubCrawl Name</label>
              </div>
              <div className="col-75">
                <input className="mdl-textfield__input" id="pubName" type="text" value={this.state.name} name="name" onChange={this.handleInputChange} placeholder="Pub Crawl Name..." />
              </div>
            </div>
            <div className="space">
              <div className="col-25">
                <label for="sdate" className="label color-form">Start Date</label>
              </div>
              <div className="col-75">
                <input className="mdl-textfield__input" id="sdate" name="startDate" type="date" value={this.state.startDate} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="space">
              <div className="col-25">
                <label for="edate" className="label color-form">End Date</label>
              </div>
              <div className="col-75">
                <input className="mdl-textfield__input" id="edate" name="endDate" type="date" value={this.state.endDate} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="space">
              <div className="col-25">
                <label for="participant" className="label color-form">Participant:</label>
              </div>
              <div className="col-75">
                <input className="mdl-textfield__input" id="participant" type="number" value={this.state.participants} name="participants" onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="space">
              <div className="col-25">
                <label for="comments" className="label color-form">Comments</label>
              </div>
              <div className="col-75">
                <textarea id="comments" name="comments" placeholder="Comments" value={this.state.comments} /*name="comments"*/ cols="40" rows="3" onChange={this.handleInputChange}></textarea>
              </div>
            </div>
            <div className="space ">
            <h4>Places</h4>
              {this.state.places.map((place, i) => <div key={i}>
                <div className="col-25">
                  <label className="mdl-textfield__label " for="pubname" className="label color-form" >Pub Name</label>
                </div>
                <div className="col-75">
                  <input className="mdl-textfield__input" value={place.namePub} onChange={e => this.changeNamePub(e, i)} />
                </div>
                <div className="col-25">
                  <label className="mdl-textfield__label" for="address" className="label color-form " >Address </label>
                </div>
                <div className="col-75">
                  <input className="mdl-textfield__input" value={place.address} onChange={e => this.changeAddress(e, i)} />
                </div>
              </div>)}
            </div>
            <button className="btn" id="createPub" onClick={(e) => this.handleClick(e)}>Create </button>
          </form>
          {this.state.message && <div className="info">
            {this.state.message}
          </div>}
        </div>
      </div>
    );
  }
}
