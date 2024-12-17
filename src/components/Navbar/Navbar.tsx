//  
import logo from '../../assets/stackline_logo.svg';
import React from 'react';

function Navbar() {
    return (
      <div className="nav-bar">
        <header className="header">
          <a href="/">
            <img src={logo} alt="Stackline Logo" />
          </a>
        </header>
      </div>
    );
  }
  export default Navbar;

  