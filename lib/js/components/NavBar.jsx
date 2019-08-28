// Imports
import React from 'react'
import Social from './Social'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import me from '../../img/not-me.jpg'
import '../../scss/navbar.scss'

let version = 'development'
try {
  version = VERSION
} catch(error) {
  console.log(error.message)
}

const menuItems = [
  { key: 'about-me', title: 'About me', action: '' },
  { key: 'what-i-do', title: 'What I do', action: '' },
  { key: 'what-i-did', title: 'What I did', action: '' },
  { key: 'what-i-like', title: 'What I like', action: '' },
]

const scrollToElement = (event, elementId) => {
  event.preventDefault()
  const node = document.getElementById(elementId)
  node.scrollIntoView({ behavior: 'smooth' })
}

const NavBar = ({ activeIndex } = {}) => (
  <div className='navbar'>
    <div className='navbar avatar'>
      <img src={me} alt='My photograph' />
    </div>
    <div className='navbar name'>
      <h3 className='navbar-name'>João Carmo</h3>
      <h6 className='navbar-title'>
        Front-end engineer<br />
        Back-end developer
      </h6>
      <div className='navbar-location'>
        <p className='navbar-location-text'>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Portugal
        </p>
      </div>
    </div>
    <div className='navbar menu'>
      {menuItems.map(({ key, title }, idx) => (
        <button
          className={activeIndex === idx ? 'navbar active item' : 'navbar item'}
          onClick={(event) => scrollToElement(event, key)}
          key={key}
        >
          {title}
        </button>
      ))}
    </div>
    <div className='navbar social'>
      <Social />
    </div>
    <div className='navbar copyright'>
      <p className='copyright-version'>
        {`version ${version}`}
      </p>
    </div>
  </div>
)

export default NavBar
