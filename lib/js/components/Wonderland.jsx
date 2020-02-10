// Imports
import React from 'react'
import classNames from 'classnames'
import BrandName from '@js/components/BrandName'
import Pages from '@js/components/Pages'
import NextButton from '@js/components/NextButton'
import BackButton from '@js/components/BackButton'
import Social from '@js/components/Social'
import Copyright from '@js/components/Copyright'
import { getAppVersion, getEnv, styledConsole } from '@js/functions'
import '@scss/wonderland'

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
