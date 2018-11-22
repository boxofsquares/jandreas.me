import React, { Component } from 'react';

import './Project.scss';

import Aside from '../Aside/Aside.jsx';
import Comment from '../Comment/Comment.jsx';

import CodeVisual from '../../images/prorep.png';
import ProRepSnippet from '../../snippets/prorep.txt';
import BikeCouchSnippet from '../../snippets/bikecouch.txt';
const snippets = {
  prorep: ProRepSnippet,
  bikecouch: BikeCouchSnippet,
};

import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-light.css'
import javascript from 'highlight.js/lib/languages/javascript';
import dart from 'highlight.js/lib/languages/dart';


class Project extends Component {
  componentDidMount() {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('dart', dart);
    hljs.highlightBlock(this.refs.codeblock);
  }

  componentDidUpdate() {
    hljs.highlightBlock(this.refs.codeblock);
  }

  render() {
    const { project } = this.props;
    return (
      <div className='project'>
        <Aside className='motivation' title={'Motivation'} content={project.motivation}/>
        <div className='code-sample'>
          <h2>Code Sample</h2>
          <div className='code-block-wrapper'>
            <pre>
              <code ref='codeblock'>{snippets[project.id]}</code>
            </pre>
          </div>
        </div>
        <div className='visual'>
          <h2>Visual</h2>
          <div className='visual-wrapper'>
            <img style={{width: '100%'}} src={CodeVisual} />
          </div>
        </div>
        <Aside className='technologies' title={'Technologies'} content={project.technologies}/>
        <Comment className='positive' title='What Was Fun' content={project.fun}/>
        <Comment className='negative' title='What Was Pain' content={project.pain}/>
      </div>
    );
  }
}

export default Project;