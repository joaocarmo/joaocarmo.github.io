import { Component } from 'react'
import cx from 'clsx'
import BackButton from '@js/components/BackButton'
import BrandName from '@js/components/BrandName'
import Copyright from '@js/components/Copyright'
import Launchpad from '@js/components/Launchpad'
import NextButton from '@js/components/NextButton'
import Pages from '@js/components/Pages'
import Social from '@js/components/Social'
import WonderlandContext from '@js/components/utils/wonderland-context'
import { getAppVersion, getEnv, styledConsole } from '@js/functions'
import '@scss/wonderland'

class Wonderland extends Component {
  constructor() {
    super()

    this.state = {
      initialRender: true,
      launchpadOpen: false,
      showPages: false,
    }

    this.wheelTimer = null

    this.handleOnWheel = this.handleOnWheel.bind(this)
    this.toggleLaunchpad = this.toggleLaunchpad.bind(this)
    this.togglePages = this.togglePages.bind(this)
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

  toggleLaunchpad() {
    const { launchpadOpen } = this.state

    this.setState({ launchpadOpen: !launchpadOpen })
  }

  togglePages() {
    const { showPages } = this.state

    this.setState({ showPages: !showPages, initialRender: false })
  }

  handleOnWheel({ nativeEvent: { wheelDelta, deltaY } }) {
    const { showPages } = this.state

    if (!showPages) {
      if (wheelDelta < 0 && deltaY > 100) {
        if (this.wheelTimer) {
          clearTimeout(this.wheelTimer)
        }
        this.wheelTimer = setTimeout(
          () => this.setState({ showPages: true }),
          0,
        )
      }
    }
  }

  render() {
    const { initialRender, launchpadOpen, showPages } = this.state

    return (
      <>
        <main
          id="brandname"
          onWheel={this.handleOnWheel}
          className={cx({
            'no-animation': !initialRender,
          })}
        >
          <BrandName />
          <NextButton onClick={this.toggleLaunchpad} />
        </main>
        <footer className="brandname">
          <Social />
          <Copyright />
        </footer>
        <main
          id="pages"
          className={cx({
            show: showPages,
            hide: !showPages,
          })}
        >
          <WonderlandContext.Provider value={{ initialRender, showPages }}>
            <Pages />
            <BackButton onClick={this.togglePages} />
          </WonderlandContext.Provider>
        </main>
        <Launchpad
          open={launchpadOpen}
          onClickPages={this.togglePages}
          onClose={this.toggleLaunchpad}
        />
      </>
    )
  }
}

export default Wonderland
