import React, { Component } from "react";
import { FacebookShareButton, WhatsappShareButton, EmailShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon, EmailIcon } from 'react-share';
import api from "../../api";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogout(e) {
    e.preventDefault();
    api
      .logout()
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err =>
        this.setState({
          message: err.toString()
        })
      );
  }
  handleClick(data) {
    // console.log("data", data)
    const pubId = data;
    api.deletePubCrawl(data).then(result => {
      console.log("SUCCESS - DELETE!");
      const pubCrawls = this.state.pubCrawls.filter(x => x._id !== pubId);
      this.setState({
        message: `Your Pub Crawl has been deleted`,
        pubCrawls: pubCrawls
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="Profile">
          <Navbar />
          <div className="_container">
            <div className="_1container">
              <img className="img" src="../dgvg.svg" alt="" />
              {api.getLocalStorageUser() && (
                <h4>{api.getLocalStorageUser().username}</h4>
              )}
            </div>
            <div className="_2container">
              <Link to={"/add-pubcrawl"} className="btns">
                New Pub Crawl
              </Link>
              <br />
              <button className="btns" onClick={e => this.handleLogout(e)}>
                Logout
              </button>
            </div>
          </div>
        </div>

        <div className="_3container">
          <div>
            <h4>My Pub Crawls</h4>

            {this.state.pubCrawls &&
              this.state.pubCrawls.map(oneCrawl => (
                <div key={oneCrawl._id}>

                  <div className="cards" style={{ width: "18rem" }}>
                    <div className="card-body edit-profile-icon">
                      <h5 className="card-title ">{oneCrawl.name}</h5>
                      <p className="card-text">{oneCrawl.startDate}</p>
                      <div className="profile-social ">
                        <WhatsappShareButton url={`https://lx-crawl.herokuapp.com/pubcrawl-detail/${oneCrawl._id}`} title={oneCrawl.name} ><WhatsappIcon size={32} round /></WhatsappShareButton>
                        <FacebookShareButton url={`https://lx-crawl.herokuapp.com/pubcrawl-detail/${oneCrawl._id}`} title={oneCrawl.name} ><FacebookIcon size={32} round /></FacebookShareButton>
                        <EmailShareButton url={`https://lx-crawl.herokuapp.com/pubcrawl-detail/${oneCrawl._id}`} title={oneCrawl.name} ><EmailIcon size={32} round /></EmailShareButton>
                        <br />
                      </div>
                      <Link to={`/edit-pubCrawl/${oneCrawl._id}`} className="btns text-alg">Edit</Link>
                      <Link to={`/pubcrawl-detail/${oneCrawl._id}`} className="btns text-alg"> View Details</Link>
                      <button className="btns" onClick={() => this.handleClick(oneCrawl._id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  /* // <h4>Previous Pub Crawls</h4>
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
            // </div> */

  componentDidMount() {
    if (api.isLoggedIn()) {
      api.getAllPubCrawlsUser().then(pubCrawls => {
        this.setState({
          pubCrawls: pubCrawls
        });
        console.log(this.state.pubCrawls);
      });
    } else {
      this.props.history.push("/");
    }
  }
}

//   console.log(api.getLocalStorageUser())
//   api.get/something from api.js/ */('http://localhost:5000/api')
//     .then(users => {
//       console.log(users)
//       this.setState({
//         users: users
//       })
//     })
//     .catch(err => console.log(err))