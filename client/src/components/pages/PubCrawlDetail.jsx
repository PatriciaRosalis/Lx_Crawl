import React, { Component } from 'react';
import api from '../../api.js';
import Navbar from './Navbar';
import JoinBtn from './JoinBtn';
//import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default class PubCrawlDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pubCrawl: null
    };
  }

  render() {
    if (!this.state.pubCrawl) return <div>Loading...</div>
    return (

      <div className="PubCrawlDetail">
        <Navbar />

        <div className="card">
          <div className="card-body pub-detail" >
            <h3 className="black-color">Pub Crawl Details</h3>
            <JoinBtn/>
            <br/>
            <h5 className="color-form" scope="col">PubCrawl Name:</h5>
            <p className="black-color" colSpan="3">{this.state.pubCrawl.name}</p>
            <h5 className="color-form" scope="row">Comments:</h5>
            <p className="black-color">{this.state.pubCrawl.comments}</p>
            <h5 className="color-form" scope="row">Start Date:</h5>
            <p className="black-color">{this.state.pubCrawl.startDate}</p>
            <h5 className="color-form" scope="row">End Date:</h5>
            <p className="black-color" colSpan="3">{this.state.pubCrawl.endDate}</p>
            <h5 className="color-form" scope="row">Participants:</h5>
            <p className="black-color" colSpan="3">{this.state.pubCrawl.participants}</p>
          </div>
          < hr />
          <div className="card-body  pub-detail">
            <h3 className="black-color">Places/ Routes </h3>
            <br/> 
            <h5 scope="col"></h5> 
            {this.state.pubCrawl.places.map((place, i) => <p className="" key={i}>
              <h5 className="color-form" scope="row">Pub name:</h5>
              <p className="black-color" value={place.namePub}>{place.namePub}</p>
              <h5 className="color-form" scope="row">Address:</h5>
              <p className="black-color" value={place.address}>{place.address}</p>
              <hr/>
            </p>)}
          </div >
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.getOnePubCrawl(this.props.match.params.pubCrawlId)
      .then(pubCrawl => {
        console.log("RESPONSE FROM API", pubCrawl)
        this.setState({
          pubCrawl: pubCrawl
        })
      })
      .catch((err) => {
        console.log("The following error is showing", err)
      })
  }
}