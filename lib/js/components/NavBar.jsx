// Imports
import React from 'react'
import me from '../../img/not-me.jpg'
import '../../scss/content.scss'

const NavBar = () => (
  <div className='navbar'>
    <div className='navbar avatar'>
      <img src={me} alt='My photograph' />
    </div>
    <div className='navbar menu'>
      <div><a href='#'>About me</a></div>
      <div><a href='#'>What I do</a></div>
      <div><a href='#'>What I did</a></div>
      <div><a href='#'>Things I like</a></div>
    </div>
  </div>
)

export default NavBar
