import BackToTop from '@js/components/BackToTop'
import AboutMe from '@js/components/pages/AboutMe'
import WhatIDo from '@js/components/pages/WhatIDo'
import WhatIDid from '@js/components/pages/WhatIDid'
import WhatILike from '@js/components/pages/WhatILike'
import Social from '@js/components/Social'
import '@scss/content'

const Content = () => (
  <div id="content-root" className="content">
    <BackToTop />
    <section id="about-me">
      <div className="observer" />
      <AboutMe />
    </section>
    <section id="what-i-do">
      <div className="observer" />
      <WhatIDo />
    </section>
    <section id="what-i-did">
      <div className="observer" />
      <WhatIDid />
    </section>
    <section id="what-i-like">
      <div className="observer" />
      <WhatILike />
    </section>
    <div className="mobile social">
      <Social />
    </div>
  </div>
)

export default Content
