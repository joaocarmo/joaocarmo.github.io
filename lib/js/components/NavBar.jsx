import PropTypes from 'prop-types'
import cx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Social from '@js/components/Social'
import { scrollToElement, getAppVersion, getBuildTime } from '@js/functions'
import me from '@img/avatar-me.jpg'
import '@scss/navbar'

const menuItems = [
  { key: 'about-me', title: 'Hello there', action: '' },
  { key: 'what-i-do', title: 'What I do', action: '' },
  { key: 'what-i-did', title: 'What I did', action: '' },
  { key: 'what-i-like', title: 'What I like', action: '' },
]

const NavBar = ({ activeIndex } = {}) => (
  <div className="navbar">
    <div className="navbar avatar">
      <img src={me} alt="My photograph" className="navbar-avatar" />
    </div>
    <div className="navbar name">
      <h3 className="navbar-name">João Carmo</h3>
      <h6 className="navbar-title">Senior Software Engineer</h6>
      <div className="navbar-location">
        <p className="navbar-location-text">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Oxford, England
        </p>
      </div>
      <div className="navbar-gender">
        <p className="navbar-gender-text">
          <FontAwesomeIcon icon={faMale} /> he/him/his
        </p>
      </div>
    </div>
    <div className="navbar menu">
      {menuItems.map(({ key, title }, idx) => (
        <button
          type="button"
          className={cx(
            'navbar',
            {
              active: activeIndex === idx,
            },
            'item',
          )}
          onClick={(event) => scrollToElement(event, key)}
          key={key}
        >
          {title}
        </button>
      ))}
    </div>
    <div className="navbar social">
      <Social />
    </div>
    <div className="navbar copyright">
      <p className="copyright-version">
        {`version ${getAppVersion()} | ${getBuildTime()}`}
      </p>
    </div>
  </div>
)

NavBar.propTypes = {
  activeIndex: PropTypes.number,
}

NavBar.defaultProps = {
  activeIndex: 0,
}

export default NavBar
