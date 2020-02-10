// Imports
import React from 'react'
import AboutMe from '@js/components/pages/AboutMe'
import WhatIDo from '@js/components/pages/WhatIDo'
import WhatIDid from '@js/components/pages/WhatIDid'
import WhatILike from '@js/components/pages/WhatILike'
import Social from '@js/components/Social'
import '@scss/content'

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
    <div className="mobile social">
      <Social />
    </div>
  </div>
)

export default Content
