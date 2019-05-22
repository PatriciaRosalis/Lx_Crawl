import React, { Component } from 'react';
import api from '../../api';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import Navbar from './Navbar'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogout(e) {
    e.preventDefault()
    api.logout()
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/") // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }))
  }

  render() {
    return (
      <div className="Profile">
        <Navbar />
        <div className="_container">
          <div className="_1container">
            <img className="img" src="../beer.svg" alt="" />
            {api.getLocalStorageUser() && <h4>{api.getLocalStorageUser().username}</h4>}
          </div>
          <div className="_2container">
          <Link to={'/add-pubcrawl'} className="btns">
          New Pub Crawl</Link>
          <br />
          <button className="btns" onClick={(e) => this.handleLogout(e)}>
            Logout</button>
          </div>
        </div>



         <div className="_3container">
          <div>

            <h4>My Pub Crawls</h4>
            {this.state.pubCrawls && this.state.pubCrawls.map(oneCrawl =>
              <div key={oneCrawl._id}>

              <div className="card cards" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title ">{oneCrawl.name}</h5>
                  <p className="card-text">{oneCrawl.startDate}</p>
                  <Link to={`/edit-pubCrawl/${oneCrawl._id}`} className="btns">Edit</Link>
                  <Link to={`/pubcrawl-detail/${oneCrawl._id}`} className="btns">View Details</Link>
                </div>
              </div>

            </div>
            )
          } 



            {/* // <h4>Previous Pub Crawls</h4>
            // <div className="demo-card-square mdl-card mdl-shadow--2dp">
            //   <div className="mdl-card__title mdl-card--expand">
            //     <h3 className="mdl-card__title-text">Lorem ipsum</h3>
            //   </div>
            //   <div className="mdl-card__supporting-text">
            //     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            //     Aenan convallis.
            //   </div>
            //   <div className="mdl-card__actions mdl-card--border">
            //     <Link to='/edit-pubCrawl/:pubCrawlId' className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            //       Reuse</Link>
            //   </div>
            // </div> */}

          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    if(api.isLoggedIn()){
      api.getAllPubCrawlsUser()
      .then(pubCrawls => {
        this.setState({
          pubCrawls: pubCrawls
        })
        console.log(this.state.pubCrawls)
      })
    } else {
      this.props.history.push("/") 
    }
    //   console.log(api.getLocalStorageUser())
    //   api.get/*something from api.js*/ */('http://localhost:5000/api')
    //     .then(users => {
    //       console.log(users)
    //       this.setState({
    //         users: users
    //       })
    //     })
    //     .catch(err => console.log(err))
  }
}