// Imports
import React from 'react'
import PropTypes from 'prop-types'
import AboutMe from './pages/AboutMe'
import WhatIDo from './pages/WhatIDo'
import WhatIDid from './pages/WhatIDid'
import WhatILike from './pages/WhatILike'
import '../../scss/content.scss'

const Content = ({ activeIndex }) => (
  <div className="content">
    <section id="about-me">
      <AboutMe activeIndex={activeIndex} />
    </section>
    <section id="what-i-do">
      <WhatIDo activeIndex={activeIndex} />
    </section>
    <section id="what-i-did">
      <WhatIDid activeIndex={activeIndex} />
    </section>
    <section id="what-i-like">
      <WhatILike activeIndex={activeIndex} />
    </section>
  </div>
)

Content.propTypes = {
  activeIndex: PropTypes.number,
}

Content.defaultProps = {
  activeIndex: 0,
}

export default Content
