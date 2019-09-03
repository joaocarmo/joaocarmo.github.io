// Imports
import React from 'react'
import MoreButton from '../MoreButton'
import { scrollToElement } from '../../functions'
import '../../../scss/pages/about-me.scss'

const AboutMe = () => (
  <>
    <div className="top-spacer" />
    <h1>
      <span className="first">I am</span>
      <br />
      <span className="second">a Developer</span>
    </h1>
    <h5>
      ...and a coffee addict
      <span role="img" aria-label="coffee" className="emoji">☕</span>
      <span role="img" aria-label="love" className="emoji">♥️</span>
    </h5>
    <MoreButton onClick={(e) => scrollToElement(e, 'what-i-do')} />
  </>
)

export default AboutMe
