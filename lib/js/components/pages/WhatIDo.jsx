// Imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faServer, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { scrollToElement } from '../../functions'
import '../../../scss/pages/what-i-do.scss'

const frontEndSkills = [
  'JavaScript (ES)',
  'React.js',
  'HTML5',
  'CSS | SCSS',
  'Webpack',
]

const backEndSkills = [
  'Python',
  'Node.js',
  'Ruby | Ruby On Rails',
  'MongoDB | SQL',
  'ElasticSearch',
]

const unixSkills = [
  'Bash | Perl',
  'Git',
  'Apache',
  'npm.js | yarn',
  'LDAP',
]

const WhatIDo = () => (
  <>
    <h2>About that coffee...</h2>
    <div className="top-spacer" />
    <p className="idented smaller justified">
      Hi! I&apos;m
      {' '}
      <strong>João</strong>
      , born and raised in Portugal — where I currently reside.
      My first contact with a computer was in the late 90s and I&apos;ve been
      hooked ever since. When I was 15, I taught myself how to program and
      design web pages using
      {' '}
      <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
        PHP
      </a>
      . I also learned how to setup my local
      {' '}
      <a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer">
        Apache
      </a>
      {' '}
      server with a
      {' '}
      <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
        MySQL
      </a>
      {' '}
      instance, because I couldn&apos;t afford a server. Oh! And I remember, at
      the time,
      {' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
        JavaScript
      </a>
      {' '}
      was
      {' '}
      <i>witchcraft</i>
      {' '}
      to me!
    </p>
    <p className="idented smaller justified">
      After a series of (un)fortunate events — which we can discuss in detail on
      a
      {' '}
      <a
        href="#what-i-did"
        onClick={(e) => scrollToElement(e, 'what-i-did')}
      >
        second date
      </a>
      , perhaps? — I ended up doing it for a living and I enjoy it enough to do
      it in my spare time as well.
    </p>
    <div className="mid-spacer" />
    <div id="skills">
      <div className="frontend">
        <div className="skill-box blue">
          <FontAwesomeIcon icon={faGlobe} />
          <h6>Front-end</h6>
          <div className="skill-box-content">
            <ul className="skill-list">
              {frontEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="backend">
        <div className="skill-box red">
          <FontAwesomeIcon icon={faServer} />
          <h6>Back-end</h6>
          <div className="skill-box-content">
            <ul className="skill-list">
              {backEndSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="unix">
        <div className="skill-box yellow">
          <FontAwesomeIcon icon={faTerminal} />
          <h6>Unix</h6>
          <div className="skill-box-content">
            <ul className="skill-list">
              {unixSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default WhatIDo
