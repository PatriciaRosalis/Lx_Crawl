import React, { Component } from 'react';
import api from '../../api.js';
import Navbar from './Navbar';
import JoinBtn from './JoinBtn';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

export default class PubCrawlDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pubCrawl: null
    };
    this.mapRef = React.createRef()
  }
  getJSDateParsed(date) {
    date = new Date(date);
    console.log("Date", date)
    return `${this.getDay(date.getDate())}-${this.getMonth(
      date.getMonth()
    )}-${date.getFullYear()}`;
  }
  getDay(day) {
    return day >= 10 ? day.toString() : '0' + day;
  }
  getMonth(month) {
    return month >= 10 ? month.toString() : '0' + month;
  }
  getGoogleMapsCoords(place) {
    return `${place.location.coordinates[1]},${place.location.coordinates[0]}`
  }
  initMap() {
    // Embed the map where "this.mapRef" is defined in the render
    let center = [-9.15,38.71]
    if (this.state.pubCrawl.places.length > 0 && this.state.pubCrawl.places[0].location.coordinates) {
      center= this.state.pubCrawl.places[0].location.coordinates
    }
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center, //First Pub Crawl Centered
      zoom: 10
    })

    // Add zoom control on the top right corner
    this.map.addControl(new mapboxgl.NavigationControl())

    // Create a marker on the map in Berlin ([13.37, 52.51])
    let length = this.state.pubCrawl.places.length
    for (let i = 0; i < length; i++) {
      try {
        let divisor = Math.max(1, length-1)
        console.log(this.state.pubCrawl.places[i].location.coordinates);
        
        new mapboxgl.Marker({ color: `rgb(${255*i/divisor},0,${255-255*i/divisor})` })
          .setLngLat(this.state.pubCrawl.places[i].location.coordinates)
          .addTo(this.map)
      }
      catch (e) {
        console.log(e)
      }
      
    }
  }
  render() {
    if (!this.state.pubCrawl) return <div>Loading...</div>
    return (

      <div className="PubCrawlDetail">
        <Navbar />
        <div className="card">
        <div className="containerMap">
              <div className="map" ref={this.mapRef}></div>
        </div>
          <div className="card-body pub-detail" >
            <h3 className="black-color">Pub Crawl Details</h3>
            {/* <JoinBtn /> */}
            <br />
            <h5 className="color-form" scope="col">PubCrawl Name:</h5>
            <p className="black-color" colSpan="3">{this.state.pubCrawl.name}</p>
            <h5 className="color-form" scope="row">Comments:</h5>
            <p className="black-color">{this.state.pubCrawl.comments}</p>
            <h5 className="color-form" scope="row">Start Date:</h5>
            <p className="black-color">{this.getJSDateParsed(this.state.pubCrawl.startDate)}</p>
            <h5 className="color-form" scope="row">End Date:</h5>
            <p className="black-color" colSpan="3">{this.getJSDateParsed(this.state.pubCrawl.endDate)}</p>
            <h5 className="color-form" scope="row">Participants:</h5>
            <p className="black-color" colSpan="3">{this.state.pubCrawl.participants}</p>
          </div>
          < hr />
          <div className="card-body  pub-detail">
            <h3 className="black-color">Places/ Routes </h3>
            <br />
            <h5 scope="col"></h5>
            {this.state.pubCrawl.places.map((place, i) => <p className="" key={i}>
            console.log("PLACE", place)
              <h5 className="color-form" scope="row">Pub name:</h5>
              <p className="black-color" value={place.namePub}><a target="_blank"
                    href={`https://www.google.com/maps/place/${this.getGoogleMapsCoords(place)}/@${this.getGoogleMapsCoords(place)},15z/`} target="_blank">{place.namePub}
                    </a></p>
              <h5 className="color-form" scope="row">Address:</h5>
              <p className="black-color" value={place.address}>{place.address}</p>
              <hr />
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
        }, () => {
          this.initMap()
        })
      })
      .catch((err) => {
        console.log("The following error is showing", err)
      })
  }
}