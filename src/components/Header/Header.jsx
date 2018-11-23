import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Janik Andreas</h1>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href='mailto:j.andreas@posteo.de'>j.andreas@posteo.de</a>
          <FontAwesomeIcon icon={faLinkedinIn} />
          <a href='https://linkedin.com/in/janikandreas'>janikandreas</a>
          <FontAwesomeIcon icon={faGithub} />
          <a href='https://github.com/boxofsquares'>boxofsquares</a>
        </div>
      </div>
    );
  }
}

export default Header;