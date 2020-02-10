// Imports
import React, { useContext } from 'react'
import MoreButton from '@js/components/MoreButton'
import { scrollToElement } from '@js/functions'
import WonderlandContext from '@js/components/utils/wonderland-context'
import '@scss/pages/about-me'

const AboutMe = () => {
  const { initialRender, showPages } = useContext(WonderlandContext)

  if (initialRender && !showPages) {
    return null
  }

  return (
    <>
      <div className="starter">
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
      </div>
    </>
  )
}

export default AboutMe
