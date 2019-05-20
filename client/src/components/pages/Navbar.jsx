import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout__header--scroll">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">LxCrawl</span>
            <div className="mdl-layout-spacer"></div>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title"><img className="title-nav" src="../title.png" alt="title" /></span>
          <nav className="mdl-navigation">
          <Link className="mdl-navigation__link" to="">Profile</Link>
          <Link className="mdl-navigation__link" to="">Add Pub</Link>
          </nav>
        </div>
        {/* <main className="mdl-layout__content">
    <div className="page-content"><!-- Your content goes here --></div>
  </main> */}
      </div>
    </div>
  )
}

export default Navbar;
