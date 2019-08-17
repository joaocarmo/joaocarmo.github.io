// Imports
import React from 'react'
import BrandName from './BrandName'
import NextButton from './NextButton'
import Social from './Social'
import Copyright from './Copyright'
import '../../scss/wonderland.scss'

class Wonderland extends React.Component {
  render() {
    return (
      <>
        <main>
          <BrandName />
          <NextButton />
        </main>
        <footer>
          <Social />
          <Copyright />
        </footer>
      </>
    )
  }
}

export default Wonderland
