import React, { Component } from 'react';

import './Aside.scss';

class Aside extends Component {
  render() {
    const { className, title, content } = this.props;

    return (
      <div className={`aside ${className}`}>
        <h2 className='title'>{title}</h2>
        <div className='content'>
          { content }
        </div>
      </div>
    );
  }
}

export default Aside;