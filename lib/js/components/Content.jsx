// Imports
import React from 'react'
import AboutMe from './pages/about-me'
import WhatIDo from './pages/what-i-do'
import WhatIDid from './pages/what-i-did'
import WhatILike from './pages/what-i-like'
import '../../scss/content.scss'

const Content = () => (
  <div className="content">
    <section id="about-me">
      <AboutMe />
    </section>
    <section id="what-i-do">
      <WhatIDo />
    </section>
    <section id="what-i-did">
      <WhatIDid />
    </section>
    <section id="what-i-like">
      <WhatILike />
    </section>
  </div>
)

export default Content
