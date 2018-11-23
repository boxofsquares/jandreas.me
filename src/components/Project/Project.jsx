import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye, faLightbulb, faWrench, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Project.scss';

import Aside from '../Aside/Aside.jsx';
import Comment from '../Comment/Comment.jsx';

import CodeVisual from '../../images/prorep.png';
import ProRepSnippet from '../../snippets/prorep.txt';
import BikeCouchSnippet from '../../snippets/bikecouch.txt';
import QueryBuilderSnippet from '../../snippets/querybuilder.txt';
import MonsterserverSnippet from '../../snippets/monsterserver.txt';

const snippets = {
  prorep: {
    content: ProRepSnippet,
    language: 'jsx'
  },
  bikecouch: {
    content: BikeCouchSnippet,
    language: 'dart',
  },
  querybuilder: {
    content: QueryBuilderSnippet,
    language: 'javascript',
  },
  monsterserver: {
    content: MonsterserverSnippet,
    language: 'go',
  }

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
        <Aside 
          className='motivation'
          title={'Motivation'}
          icon={<FontAwesomeIcon icon={faLightbulb} size='2x' />}
          content={project.motivation}
          />
        <div className='code-sample'>
          <div className='title-wrapper'>
            <FontAwesomeIcon icon={faCode} size={'2x'}/>
            <h2 className='title'>Code Sample</h2>
          </div>
          <div className='code-block-wrapper'>
            <pre>
              <code className={snippets[project.id].language} ref='codeblock'>{snippets[project.id].content}</code>
            </pre>
          </div>
        </div>
        <div className='visual'>
          <div className='title-wrapper'>
            <FontAwesomeIcon icon={faEye} size={'2x'}/>
            <h2 className='title'>Visual</h2>
          </div>
          <div className='visual-wrapper'>
            <img style={{width: '100%'}} src={CodeVisual} />
          </div>
        </div>
        <Aside 
          className='technologies'
          title={'Technologies'}
          icon={<FontAwesomeIcon icon={faWrench} size='2x'/>}
          content={project.technologies.content}
          techTags={project.technologies.tags}/>
        <Aside
          className='links'
          title={'Links'}
          icon={<FontAwesomeIcon icon={faExternalLinkAlt} size='2x' />}
          links={project.links}/>
        <Comment className='positive' title='What Was Fun' content={project.fun}/>
        <Comment className='negative' title='What Was Pain' content={project.pain}/>
      </div>
    );
  }
}

export default Project;