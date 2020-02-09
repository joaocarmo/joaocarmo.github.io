// Imports
import React from 'react'
import classNames from 'classnames'
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
      initialRender: true,
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
    this.setState({ showPages: !showPages, initialRender: false })
  }

  handleOnWheel(event) {
    const { showPages } = this.state
    if (!showPages) {
      if (event.nativeEvent.wheelDelta < 0 && event.nativeEvent.deltaY > 100) {
        if (this.wheelTimer) {
          clearTimeout(this.wheelTimer)
        }
        this.wheelTimer = setTimeout(() => this.setState({ showPages: true }), 0)
      }
    }
  }

  render() {
    const { initialRender, showPages } = this.state
    return (
      <>
        <main
          id="brandname"
          onWheel={this.handleOnWheel}
          className={classNames({
            'no-animation': !initialRender,
          })}
        >
          <BrandName />
          <NextButton onClick={this.handleOnClick} />
        </main>
        <footer className="brandname">
          <Social />
          <Copyright />
        </footer>
        <main
          id="pages"
          className={classNames({
            show: showPages,
            hide: !showPages,
          })}
        >
          <Pages />
          <BackButton onClick={this.handleOnClick} />
        </main>
      </>
    )
  }
}

export default Wonderland
