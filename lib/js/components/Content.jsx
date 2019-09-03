// Imports
import React from 'react'
import AboutMe from './pages/AboutMe'
import WhatIDo from './pages/WhatIDo'
import WhatIDid from './pages/WhatIDid'
import WhatILike from './pages/WhatILike'
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
