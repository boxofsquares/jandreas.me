import React, { Component } from 'react';

import './Projects.scss';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const { projectNames, onProjectChange, currentIndex } = this.props,
          { x, y }                                        = this.state;

    let isSticky = y > 100;

    return (
      <nav className={`projects ${isSticky ? 'sticky ' : ''}`} >
        <ul className='project-list'>
          {
            projectNames.map((name, index) => {
              return <li className={`list-item ${currentIndex === index ? 'current ' : ''}`} onClick={() => onProjectChange(index)}>{name}</li>
            })
          }
        </ul>
      </nav>
    );
  }

  handleScroll() {
    this.setState({ x: window.scrollX, y: window.scrollY });
  }
}

export default Projects;