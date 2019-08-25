// Imports
import React from 'react'
import Social from './Social'
import me from '../../img/not-me.jpg'
import '../../scss/navbar.scss'

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
  </div>
)

export default NavBar
