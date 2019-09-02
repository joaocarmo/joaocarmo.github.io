// Imports
import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Content from './Content'
import '../../scss/pages.scss'

const observableElementIds = [
  'about-me', 'what-i-do', 'what-i-did', 'what-i-like',
]

const Pages = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observerOpts = {
      root: null,
      rootMargin: '0px',
      threshold: 0.0,
    }
    const observerFn = (elementId, idx) => (entries) => {
      const [{ isIntersecting }] = entries
      if (isIntersecting) setActiveIndex(idx)
    }
    observableElementIds.forEach((elementId, idx) => {
      const observer = new IntersectionObserver(observerFn(elementId, idx), observerOpts)
      let target = document.querySelector(`#${elementId} > h1`)
      if (!target) {
        target = document.querySelector(`#${elementId} > h2`)
      }
      try {
        observer.observe(target)
      } catch (error) {
        console.log(error.message)
      }
    })
  }, [])

  return (
    <div className="grid">
      <div className="grid-navbar">
        <NavBar activeIndex={activeIndex} />
      </div>
      <div className="grid-content">
        <Content />
      </div>
    </div>
  )
}

export default Pages
