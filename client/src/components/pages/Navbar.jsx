import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand navbar-dark ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">Profile <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add-pubcrawl">Add Pubcrawl</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
