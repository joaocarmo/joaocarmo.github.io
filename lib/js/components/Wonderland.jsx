import { useCallback, useEffect, useMemo, useState } from 'react'
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

const Wonderland = () => {
  const [initialRender, setInitialRender] = useState(true)
  const [launchpadOpen, setLaunchpadOpen] = useState(false)
  const [showPages, setShowPages] = useState(false)

  const contextValue = useMemo(
    () => ({ initialRender, showPages }),
    [initialRender, showPages],
  )

  useEffect(() => {
    styledConsole(`
> whoami
joaocarmo
> echo $VERSION
${getAppVersion()}
> echo $ENVIRONMENT
${getEnv()}
`)
  }, [])

  const toggleLaunchpad = useCallback(() => {
    setLaunchpadOpen(!launchpadOpen)
  }, [launchpadOpen])

  const togglePages = useCallback(() => {
    setShowPages(!showPages)
    setInitialRender(false)
  }, [showPages])

  return (
    <>
      <main
        id="brandname"
        className={cx({
          'no-animation': !initialRender,
        })}
      >
        <BrandName />
        <NextButton onClick={toggleLaunchpad} />
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
        <WonderlandContext.Provider value={contextValue}>
          <Pages />
          <BackButton onClick={togglePages} />
        </WonderlandContext.Provider>
      </main>
      <Launchpad
        open={launchpadOpen}
        onClickPages={togglePages}
        onClose={toggleLaunchpad}
      />
    </>
  )
}

export default Wonderland
