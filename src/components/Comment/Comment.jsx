import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBolt } from '@fortawesome/free-solid-svg-icons';

import './Comment.scss';

class Comment extends Component {
  render() {
    const { className, title, content } = this.props;
    let icon = title.indexOf('Fun') > -1 ? faHeart : faBolt;
    return (
      <div className={`comment ${className}`}>
        <FontAwesomeIcon icon={icon} size={'2x'}/>
        <h2 className='title'>{title}</h2>
        <p className='content'>
          {content}
        </p>
      </div>
    );
  }
}

export default Comment;