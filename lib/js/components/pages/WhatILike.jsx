// Imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode, faHeadphones, faLightbulb, faMicroscope,
} from '@fortawesome/free-solid-svg-icons'
import '../../../scss/pages/what-i-like.scss'

const WhatILike = () => (
  <>
    <h2>Well... I like</h2>
    <div className="top-spacer" />
    <p className="idented smaller justified">
      I like to program, obviously. I always did, from a very young age, from
      the times of IRC programs like
      {' '}
      <i>mIRC</i>
      {' '}
      and scripting then. From the era of console emulators and ROMs,
      peer-to-peer and floppy disks. When games and apps were easy to hack and
      crack and everyone used the same license key by adding the app&apos;s
      license server host name to the system&apos;s
      {' '}
      <i>hosts</i>
      {' '}
      file so it couldn&apos;t verify its authenticity. And now, we no longer
      use
      {' '}
      <i>Adobe Flash</i>
      {' '}
      to make corny web introductions and buttons. What an achievement!
    </p>
    <div className="mid-spacer" />
    <div id="interests">
      <div className="opensource">
        <div className="interest-box">
          <FontAwesomeIcon icon={faCode} size="3x" />
          <br />
          <br />
          <h6>Open Source</h6>
        </div>
      </div>
      <div className="science">
        <div className="interest-box">
          <FontAwesomeIcon icon={faMicroscope} size="3x" />
          <br />
          <br />
          <h6>Science</h6>
        </div>
      </div>
      <div className="facts">
        <div className="interest-box">
          <FontAwesomeIcon icon={faLightbulb} size="3x" />
          <br />
          <br />
          <h6>Fun Facts</h6>
        </div>
      </div>
      <div className="music">
        <div className="interest-box">
          <FontAwesomeIcon icon={faHeadphones} size="3x" />
          <br />
          <br />
          <h6>Music</h6>
        </div>
      </div>
      <div className="cinema">
        <div className="interest-box">
          Cinema
        </div>
      </div>
      <div className="writing">
        <div className="interest-box">
          Writing
        </div>
      </div>
      <div className="photography">
        <div className="interest-box">
          Photography
        </div>
      </div>
      <div className="diy">
        <div className="interest-box">
          DIY
        </div>
      </div>
    </div>
  </>
)

export default WhatILike
