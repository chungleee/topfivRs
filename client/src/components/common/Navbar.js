import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-white">
        <div className="container">
          <div className="navbar-brand">
            <Link to='/' className="navbar-item">TopFivRs</Link>
          </div>
          <div className="navbar-menu is-active">
            <div className="navbar-end">
              <Link to='/register' className="navbar-item">Register</Link>
              <Link to='/login' className="navbar-item">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar