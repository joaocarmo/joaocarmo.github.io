// Imports
import React from 'react'
import Social from './Social'
import me from '../../img/not-me.jpg'
import '../../scss/content.scss'

const menuItems = [
  { key: 'about', title: 'About Me', action: '' },
  { key: 'do', title: 'What I do', action: '' },
  { key: 'did', title: 'What I did', action: '' },
  { key: 'like', title: 'What I like', action: '' },
]

const NavBar = () => (
  <div className='navbar'>
    <div className='navbar avatar'>
      <img src={me} alt='My photograph' />
    </div>
    <div className='navbar menu'>
      {menuItems.map(({ key, title }) => (
        <button className='navbar item' key={key}>{title}</button>
      ))}
    </div>
    <div className='navbar social'>
    <Social />
    </div>
  </div>
)

export default NavBar
