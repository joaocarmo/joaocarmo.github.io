import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { scrollToElement } from '@js/functions'
import '@scss/backtotop'

const topThreshold = 80

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const backToTopRef = useRef(null)

  const handleOnScroll = useCallback(({ target: { scrollTop } }) => {
    if (scrollTop > topThreshold) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  const handleOnClick = useCallback((e) => {
    scrollToElement(e, 'top')
  }, [])

  useEffect(() => {
    const contentRoot = document.getElementById('content-root')

    contentRoot.onscroll = handleOnScroll

    return () => {
      contentRoot.onscroll = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const className = useMemo(
    () => (isVisible ? 'visible' : 'hidden'),
    [isVisible],
  )

  return (
    <>
      <div id="top" />
      <button
        id="back-to-top"
        type="button"
        onClick={handleOnClick}
        ref={backToTopRef}
        className={className}
      >
        Top
      </button>
    </>
  )
}

export default BackToTop
