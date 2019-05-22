import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <Link class="navbar-brand" to="#">Navbar</Link>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <Link class="nav-link" to="/profile">Profile <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/add-pubcrawl">Add Pubcrawl</Link>
      </li>
    </ul>
  </div>
</nav>

      {/* <div className="">
        <header className="">
          <div className="">
            <span className="">LxCrawl</span>
            <div className=""></div>
          </div>
        </header>
        <div className="">
          <span className=""><img className="title-nav" src="../title.png" alt="title" /></span>
          <nav className="">
          <Link className="" to="/">Home</Link>
          <Link className="" to="/profile">Profile</Link>
          <Link className="" to="/add-pubcrawl">Add Pub Crawl</Link>
          </nav>
        </div>
      </div> */}
    </div>
  )
}

export default Navbar;
