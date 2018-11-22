import React, { Component } from 'react';

import Header from './components/Header/Header.jsx';
import Projects from './components/Projects/Projects.jsx';
import Project from './components/Project/Project.jsx';

import './App.scss';

const projs = require('./content.json');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectIndex: 0,
    };

    this.handleProjectChange = this.handleProjectChange.bind(this);
  }

  render() {
    const { projectIndex } = this.state;
    return (
      <div id='root'>
        <Header />
        <Projects projectNames={projs.map(project => project.title)} currentIndex={projectIndex} onProjectChange={this.handleProjectChange}/>
        <Project project={projs[projectIndex]} />
      </div>
    );
  }

  handleProjectChange(projectIndex) {
    this.setState({
      projectIndex: projectIndex,
    });
    window.scrollTo(0,0);
  }

}

export default App;