// Imports
import React from 'react'
import Accordion from '../Accordion'
import '../../../scss/pages/what-i-did.scss'

const WhatIDid = () => (
  <>
    <h2>...and our second date</h2>
    <div className="top-spacer" />
    <p className="idented smaller justified">
      All I can say is that I&apos;m very passionate about learning and figuring
      out how stuff works. My education has been a long road through many
      different, and often distant, places. Regardless, it brought me here and
      made me what I am today. Ask me anything !
    </p>
    <div className="mid-spacer" />
    <div id="academic">
      <div className="leftcol" />
      <div className="middlecol">
        <Accordion.Container>
          <Accordion.Item title="Title here">
            Stuff here
          </Accordion.Item>
          <Accordion.Item title="Title here">
            Stuff here
          </Accordion.Item>
        </Accordion.Container>
      </div>
      <div className="rightcol" />
    </div>
  </>
)

export default WhatIDid
