import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="demo-layout-waterfall mdl-layout mdl-js-layout ">
        <header className=" mdl-layout__header--waterfall">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">LxCrawl</span>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" name="sample" id="waterfall-exp" />
              </div>
            </div>
          </div>

        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title"><img className="title-nav" src="../title.png" alt="title" /></span>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="/profile">Profile</Link>
            <Link className="mdl-navigation__link" to="/add-pubcrawl">Add PubCrawl</Link>
            {/* <Link className="mdl-navigation__link" to="">Join PubCrawl</Link> */}
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content"></div>
        </main>
      </div>
    </div>
  )
}

export default Navbar;
