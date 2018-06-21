import React, { Component } from 'react';
import logo from '../logo-app.PNG';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header-header">
        <div className="Header-container">
          <img src={logo} className="Header-logo" alt="logo" />
        </div>
        <div className="Header-welcome">
          <div className="Header-message">
            Welcome | Ciaran
            </div>
        </div>
      </div>
    );
  }
}

export default Header
