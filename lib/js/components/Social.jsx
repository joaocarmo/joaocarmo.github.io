// Imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin, faGithub, faStackOverflow, faInstagram, faFlickr,
} from '@fortawesome/free-brands-svg-icons'

const socialLinks = [
  {
    style: 'brands',
    icon: faLinkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ojoaocarmo',
  },
  {
    style: 'brands',
    icon: faGithub,
    name: 'Github',
    url: 'https://github.com/joaocarmo',
  },
  {
    style: 'brands',
    icon: faStackOverflow,
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/story/joaocarmo',
  },
  {
    style: 'brands',
    icon: faInstagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/johnnypestana/',
  },
  {
    style: 'brands',
    icon: faFlickr,
    name: 'Flickr',
    url: 'https://www.flickr.com/people/joao_pestana/',
  },
  {
    style: 'solid',
    icon: faEnvelope,
    name: 'Email',
    url: 'mailto:info@joaocarmo.com',
  },
]

const Social = () => (
  <div className='social-links'>
    {socialLinks.map(({ style, icon, name, url }) => (
      <React.Fragment key={name}>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          alt={name}
        >
          <FontAwesomeIcon icon={icon} />
        </a>
        <span className='spacer' />
      </React.Fragment>
    ))}
  </div>
)

export default Social
