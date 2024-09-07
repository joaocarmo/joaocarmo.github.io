import 'intersection-observer'
import { useCallback, useEffect, useState } from 'react'
import NavBar from '@js/components/NavBar'
import Content from '@js/components/Content'
import { debugPrint } from '@js/functions'
import '@scss/pages'

const observableSelectors = [
  '#about-me',
  '#what-i-do',
  '#what-i-did',
  '#what-i-like',
]

const observerOpts = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
}

const attachObserver = (observerCallback) => (selector, idx) => {
  const observer = new IntersectionObserver(
    observerCallback(selector, idx),
    observerOpts,
  )

  let target = document.querySelector(`${selector} .observer`)

  if (!target) {
    target = document.querySelector(`${selector} h1`)
  }

  if (!target) {
    target = document.querySelector(`${selector} h2`)
  }

  try {
    observer.observe(target)
  } catch (error) {
    debugPrint(error.message)
  }
}

const Pages = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const observerCallback = useCallback(
    (_, idx) => (entries) => {
      const [{ isIntersecting }] = entries

      if (isIntersecting) {
        setActiveIndex(idx)
      }
    },
    [],
  )

  useEffect(() => {
    observableSelectors.forEach(attachObserver(observerCallback))
  }, [])

  return (
    <div className="grid">
      <div className="grid-navbar">
        <NavBar activeIndex={activeIndex} />
      </div>
      <div className="grid-content">
        <Content activeIndex={activeIndex} />
      </div>
    </div>
  )
}

export default Pages
