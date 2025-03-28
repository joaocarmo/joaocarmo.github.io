import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStackOverflow,
  faStrava,
} from '@fortawesome/free-brands-svg-icons'
import pkg from '../../../package.json'
import '@scss/social'

const socialLinks = [
  {
    style: 'brands',
    icon: faLinkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ojoaocarmo',
    ariaLabel: 'Go to my LinkedIn profile',
  },
  {
    style: 'brands',
    icon: faGithub,
    name: 'Github',
    url: 'https://github.com/joaocarmo',
    ariaLabel: 'Got to my Github repository page',
  },
  {
    style: 'brands',
    icon: faStackOverflow,
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/8713532/jo%c3%a3o-carmo',
    ariaLabel: 'Go to my Stack Overflow page',
  },
  {
    style: 'brands',
    icon: faInstagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/joaowithatilde/',
    ariaLabel: 'Go to my Instagram profile',
  },
  {
    style: 'brands',
    icon: faStrava,
    name: 'Strava',
    url: 'https://www.strava.com/athletes/84370817',
    ariaLabel: 'Go to my Strava profile',
  },
  {
    style: 'solid',
    icon: faEnvelope,
    name: 'Email',
    url: `mailto:${pkg.author.email}`,
    ariaLabel: 'Send me an e-mail about anything',
  },
]

const Social = () => (
  <div className="social">
    {socialLinks.map(({ icon, name, url, ariaLabel }) => (
      <Fragment key={name}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          alt={name}
          aria-label={ariaLabel}
        >
          <FontAwesomeIcon icon={icon} />
        </a>
        <span className="spacer" />
      </Fragment>
    ))}
  </div>
)

export default Social
