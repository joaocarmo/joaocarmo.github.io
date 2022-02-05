import { useMemo } from 'react'
import PropTpes from 'prop-types'
import cx from 'clsx'
import cvApp from '@img/launchpad-cv.png'
import littenApp from '@img/launchpad-litten.png'
import uyghursApp from '@img/launchpad-uyghurs.png'
import '@scss/launchpad'

const Link = ({ children, to }) => {
  if (!to) {
    return children
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTpes.node.isRequired,
  to: PropTpes.string,
}

Link.defaultProps = {
  to: '',
}

const Launchpad = ({ open, onClickPages, onClose }) => {
  const apps = useMemo(
    () => [
      {
        key: 'cv',
        icon: cvApp,
        label: 'About Me',
        alt: 'My Curriculum Vitae',
        href: null,
        onClick: onClickPages,
      },
      {
        key: 'litten',
        icon: littenApp,
        label: 'Litten',
        alt: 'Litten App',
        href: 'https://litten.app',
        onClick: null,
      },
      {
        key: 'uyghurs',
        icon: uyghursApp,
        label: 'Free The Uyghurs',
        alt: 'Free The Uyghurs',
        href: 'https://freetheuyghurs.com',
        onClick: null,
      },
    ],
    [onClickPages],
  )

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={cx('background-blur', { 'launchpad-open': open })}
      onClick={onClose}
      role="menu"
      tabIndex="-1"
    >
      <div className={cx('launchpad-apps', { 'launchpad-apps-open': open })}>
        {apps.map(({ key, icon, label, alt, href, onClick }) => (
          <Link key={key} to={href}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
              className={cx('launchpad-app', { 'launchpad-app-open': open })}
              onClick={onClick}
              role="menuitem"
              tabIndex="0"
            >
              <img src={icon} alt={alt} className="launchpad-app-img" />
              <p className="launchpad-app-label">{label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

Launchpad.propTypes = {
  open: PropTpes.bool.isRequired,
  onClickPages: PropTpes.func.isRequired,
  onClose: PropTpes.func.isRequired,
}

export default Launchpad
