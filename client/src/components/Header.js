import React, { Component } from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Feedback
          </a>
          <ul className="right">
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

/* Hooks revamp?
const header = () => {
  const []
}
*/
