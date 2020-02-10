// Imports
import React from 'react'
import PropTypes from 'prop-types'
import AboutMe from '@js/components/pages/AboutMe'
import WhatIDo from '@js/components/pages/WhatIDo'
import WhatIDid from '@js/components/pages/WhatIDid'
import WhatILike from '@js/components/pages/WhatILike'
import Social from '@js/components/Social'
import '@scss/content'

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
    <div className="mobile social">
      <Social />
    </div>
  </div>
)

Content.propTypes = {
  activeIndex: PropTypes.number,
}

Content.defaultProps = {
  activeIndex: 0,
}

export default Content
