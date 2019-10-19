// Imports
import React from 'react'
import BrandName from './BrandName'
import Pages from './Pages'
import NextButton from './NextButton'
import BackButton from './BackButton'
import Social from './Social'
import Copyright from './Copyright'
import { getAppVersion, getEnv, styledConsole } from '../functions'
import '../../scss/wonderland.scss'

class Wonderland extends React.Component {
  constructor() {
    super()

    this.state = {
      showPages: false,
    }

    this.wheelTimer = null

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleOnWheel = this.handleOnWheel.bind(this)
  }

  componentDidMount() {
    styledConsole(`
> whoami
joaocarmo
> echo $VERSION
${getAppVersion()}
> echo $ENVIRONMENT
${getEnv()}
`)
  }

  handleOnClick() {
    const { showPages } = this.state
    this.setState({ showPages: !showPages })
  }

  handleOnWheel(event) {
    const { showPages } = this.state
    if (!showPages) {
      if (event.nativeEvent.wheelDelta < 0 && event.nativeEvent.deltaY > 100) {
        if (this.wheelTimer) clearTimeout(this.wheelTimer)
        this.wheelTimer = setTimeout(() => this.setState({ showPages: true }), 0)
      }
    }
  }

  render() {
    const { showPages } = this.state
    return (
      <>
        {!showPages && (
          <>
            <main id="brandname" onWheel={this.handleOnWheel}>
              <BrandName />
              <NextButton onClick={this.handleOnClick} />
            </main>
            <footer className="brandname">
              <Social />
              <Copyright />
            </footer>
          </>
        )}
        {showPages && (
          <main id="pages">
            <Pages />
            <BackButton onClick={this.handleOnClick} />
          </main>
        )}
      </>
    )
  }
}

export default Wonderland
