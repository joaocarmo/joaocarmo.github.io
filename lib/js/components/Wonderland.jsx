// Imports
import React from 'react'
import BrandName from './BrandName'
import Social from './Social'
import Copyright from './Copyright'
import '../../scss/wonderland.scss'

class Wonderland extends React.Component {
  render() {
    return (
      <>
        <header key='header'></header>
        <main key='main'>
          <BrandName />
        </main>
        <footer key='footer'>
          <Social />
          <Copyright />
        </footer>
      </>
    )
  }
}

export default Wonderland
