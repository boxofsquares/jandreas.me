import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Janik Andreas</h1>
        <div>
          <span>e. j.andreas@posteo.de</span>
          <span>/in/janikandreas</span>
          <span>boxofsquares</span>
        </div>
      </div>
    );
  }
}

export default Header;