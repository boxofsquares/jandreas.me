import React, { Component } from 'react';

import './Comment.scss';

class Comment extends Component {
  render() {
    const { className, title, content } = this.props;

    return (
      <div className={`comment ${className}`}>
        <h2 className='title'>{title}</h2>
        <p className='content'>
          {content}
        </p>
      </div>
    );
  }
}

export default Comment;