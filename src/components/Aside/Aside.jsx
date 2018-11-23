import React, { Component } from 'react';

import './Aside.scss';

class Aside extends Component {
  render() {
    const { className, title, icon, content, techTags, links } = this.props;
    return (
      <div className={`aside ${className}`}>
        { icon }
        <h2 className='title'>{title}</h2>
        <div className='content'>
          { content }
        </div>
        { techTags ? 
        <ul className='tech-tags'>
          {
            techTags.map((techName) => {
              return TechWidget(techName);
            })
          }
        </ul> : null 
        }
        { links ? 
        <ul className='links'>
          { 
            Object.values(links).map((link) => {
              return  <li><a href={link}>{link}</a></li>
            })
          }
        </ul> : null
        }
      </div>
    );
  }
}

const TechWidget = (tech) => {
  const technologies = {
    react: {
      text: "React.js",
      cssClass: 'react'
    },
    heroku: {
      text: "Heroku",
      cssClass: 'heroku',
    },
    node: {
      text: "Node.js",
      cssClass: 'node',
    },
    googlevision: {
      text: "Google Vision API",
      cssClass: 'google-vision',
    },
    flutter: {
      text: 'Flutter SDK',
      cssClass: 'flutter',
    },
    firebase: {
      text: "Firebase/Firestore",
      cssClass: 'firebase',
    },
    javascript: {
      text: "JavaScript",
      cssClass: 'javascript',
    },
    golang: {
      text: "Golang (Go)",
      cssClass: 'golang',
    },
    sass: {
      text: "Sass",
      cssClass: 'sass',
    },
    webpack: {
      text: "Webpack",
      cssClass: "webpack",  
    },
    dart: {
      text: "Dart",
      cssClass: 'dart',
    }
  };

  
  return (
    technologies[tech] ? <li className={`tech-tag ${technologies[tech].cssClass}`}>{technologies[tech].text}</li> : null
  )
}

export default Aside;