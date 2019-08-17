// Imports
import React from 'react'
import BrandName from './BrandName'
import Pages from './Pages'
import NextButton from './NextButton'
import BackButton from './BackButton'
import Social from './Social'
import Copyright from './Copyright'
import '../../scss/wonderland.scss'

class Wonderland extends React.Component {
  constructor() {
    super()

    this.state = {
      showPages: true,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    const { showPages } = this.state
    this.setState({ showPages: !showPages })
  }

  render() {
    const { showPages } = this.state
    return (
      <>
        {!showPages && (
          <>
            <main id='brandname'>
              <BrandName />
              <NextButton onClick={this.handleOnClick} />
            </main>
            <footer>
              <Social />
              <Copyright />
            </footer>
          </>
        )}
        {showPages && (
          <main id='pages'>
            <Pages />
            <BackButton onClick={this.handleOnClick} />
          </main>
        )}
      </>
    )
  }
}

export default Wonderland
