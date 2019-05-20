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
    //this.mapRef = React.createRef() // NEW
    //this.map = null // NEW
    //this.marker = null // NEW
  }
  //initMap(lng, lat) {
  //  // Embed the map where "this.mapRef" is defined in the render
  //  this.map = new mapboxgl.Map({
  //    container: this.mapRef.current,
  //    style: 'mapbox://styles/mapbox/streets-v11',
  //    center: [lng, lat],
  //    zoom: 10
  //  })
  //  this.map.addControl(new mapboxgl.NavigationControl())
  //  this.marker = new mapboxgl.Marker({color: 'red'})
  //  .setLngLat([lng,lat])
  //  .addTo(this.map)
  //}
  render() {
    if (!this.state.pubCrawl) return <div>Loading...</div>               
    return (
      
      <div className="PubCrawlDetail">
        <Navbar />

        <h1>{this.state.pubCrawl.name}</h1>
        <p><strong>Comments:</strong>{this.state.pubCrawl.comments}</p>
        <p><strong>Start Date:</strong>{this.state.pubCrawl.startDate}</p>
        <p><strong>End Date:</strong>{this.state.pubCrawl.endDate}</p>
        <p><strong>Participants:</strong>{this.state.pubCrawl.participants}</p>
        <hr />
        <h2>Places</h2>
        {this.state.pubCrawl.places.map((place,i) => <div key={i}>
          <p value={place.namePub}><strong>Pub name:</strong> {place.namePub}</p><br/>
          <p value={place.address}><strong>Address:</strong>{place.address}</p><br/>
            <br/>
          </div>)}
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