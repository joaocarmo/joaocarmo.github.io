// Imports
import React, { useState, useEffect } from 'react'
import NavBar from '@js/components/NavBar'
import Content from '@js/components/Content'
import { debugPrint } from '@js/functions'
import '@scss/pages'

const observableElementIds = [
  'about-me', 'what-i-do', 'what-i-did', 'what-i-like',
]

const Pages = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const observerOpts = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  }

  let previousY = 0

  const observerFn = (elementId, idx) => (entries) => {
    const [{ isIntersecting, boundingClientRect: { y: currentY } }] = entries
    let scrollingUp = false
    if (previousY < currentY) {
      scrollingUp = true
    }
    previousY = currentY
    if (isIntersecting) {
      setActiveIndex(idx)
    } else if (scrollingUp && idx === 1) {
      setActiveIndex(idx - 1)
    }
  }

  useEffect(() => {
    observableElementIds.forEach((elementId, idx) => {
      const observer = new IntersectionObserver(observerFn(elementId, idx), observerOpts)
      let target = document.querySelector(`#${elementId} h1`)
      if (!target) {
        target = document.querySelector(`#${elementId} h2`)
      }
      try {
        observer.observe(target)
      } catch (error) {
        debugPrint(error.message)
      }
    })
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
