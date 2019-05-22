import React, { Component } from 'react';
import api from '../../api.js';
import Navbar from './Navbar'
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
        <br />
        <h1>Pub Crawl Details</h1>
        <br />
        <table class="table table-hover table-light">
          <thead>
            <tr>
              <th scope="col">PubCrawl Name:</th>
              <th colspan="3">{this.state.pubCrawl.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Comments:</th>
              <td>{this.state.pubCrawl.comments}</td>
            </tr>
            <tr>
              <th scope="row">Start Date:</th>
              <td>{this.state.pubCrawl.startDate}</td>
            </tr>
            <tr>
              <th scope="row">End Date:</th>
              <td colspan="3">{this.state.pubCrawl.endDate}</td>
            </tr>
            <tr>
              <th scope="row">Participants:</th>
              <td colspan="3">{this.state.pubCrawl.participants}</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2>Places</h2>
        <table class="table table-hover table-light">
          <thead>
            <tr>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {this.state.pubCrawl.places.map((place,i) => <td key={i}> 
              <tr>
                <th scope="row">Pub name:</th>
                <td value={place.namePub}>{place.namePub}</td>
              </tr>
              <tr>
                <th scope="row">Address:</th>
                <td value={place.address}>{place.address}</td>
              </tr>
            </td>)}
          </tbody>
        </table>
      </div>
    );
  }
  componentDidMount(){
    api.getOnePubCrawl(this.props.match.params.pubCrawlId)
     .then(pubCrawl => {
       console.log("RESPONSE FROM API", pubCrawl)
       this.setState({
         pubCrawl: pubCrawl
       })
     })
    .catch((err)=>{
      console.log("The following error is showing", err)
    })
  }
}