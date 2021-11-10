import { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faInstagram,
  faFlickr,
} from '@fortawesome/free-brands-svg-icons'
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
    url: 'https://stackoverflow.com/story/joaocarmo',
    ariaLabel: 'Go to my Stack Overflow page',
  },
  {
    style: 'brands',
    icon: faInstagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/johnnypestana/',
    ariaLabel: 'Go to my Instagram profile',
  },
  {
    style: 'brands',
    icon: faFlickr,
    name: 'Flickr',
    url: 'https://www.flickr.com/people/joao_pestana/',
    ariaLabel: 'Go to my Flickr gallery',
  },
  {
    style: 'solid',
    icon: faEnvelope,
    name: 'Email',
    url: 'mailto:esteem.trice.05@icloud.com',
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
