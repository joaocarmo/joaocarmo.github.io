import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCameraRetro,
  faCode,
  faCoffee,
  faFilm,
  faHeadphones,
  faLightbulb,
  faMicroscope,
  faSignature,
} from '@fortawesome/free-solid-svg-icons'
import '@scss/pages/what-i-like'

const WhatILike = () => (
  <>
    <h2>Well... I like</h2>
    <div className="top-spacer" />
    <p className="idented smaller justified">
      I like to program, obviously. I always did, from a very young age, from
      the times of IRC programs like <i>mIRC</i> and scripting them. From the
      era of console emulators and ROMs, peer-to-peer and floppy disks. When
      games and apps were easy to hack and crack... And now, we no longer use{' '}
      <i>Adobe Flash</i> to make corny web introductions and buttons. What an
      achievement!
    </p>
    <div className="mid-spacer" />
    <div id="interests">
      <div className="opensource">
        <div className="interest-box">
          <div className="interest-icon">
            <FontAwesomeIcon icon={faCode} size="3x" />
          </div>
          <h6 className="interest-title">Open Source</h6>
        </div>
      </div>
      <div className="science">
        <div className="interest-box">
          <div className="interest-icon">
            <FontAwesomeIcon icon={faMicroscope} size="3x" />
          </div>
          <h6 className="interest-title">Science</h6>
        </div>
      </div>
      <div className="facts">
        <div className="interest-box">
          <div className="interest-icon">
            <FontAwesomeIcon icon={faLightbulb} size="3x" />
          </div>
          <h6 className="interest-title">Fun Facts</h6>
        </div>
      </div>
      <div className="music">
        <div className="interest-box">
          <div className="interest-icon">
            <FontAwesomeIcon icon={faHeadphones} size="3x" />
          </div>
          <h6 className="interest-title">Music</h6>
        </div>
      </div>
      <div className="cinema">
        <div className="interest-box">
          <div className="interest-icon">
            <FontAwesomeIcon icon={faFilm} size="3x" />
          </div>
          <h6 className="interest-title">Cinema</h6>
        </div>
      </div>
      <div className="writing">
        <div className="interest-box">
          <div className="interest-icon">
            <FontAwesomeIcon icon={faSignature} size="3x" />
          </div>
          <h6 className="interest-title">Writing</h6>
        </div>
      </div>
      <div className="photography">
        <div className="interest-box">
          <div className="interest-icon">
            <FontAwesomeIcon icon={faCameraRetro} size="3x" />
          </div>
          <h6 className="interest-title">Photography</h6>
        </div>
      </div>
      <div className="diy">
        <div className="interest-box">
          <div className="interest-icon">
            <FontAwesomeIcon icon={faCoffee} size="3x" />
          </div>
          <h6 className="interest-title">Coffee</h6>
        </div>
      </div>
    </div>
  </>
)

export default WhatILike
