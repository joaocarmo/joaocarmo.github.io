// Imports
import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Content from './Content'
import '../../scss/pages.scss'

const observableElementIds = [
  'about-me', 'what-i-do', 'what-i-did', 'what-i-like',
]

const Pages = () => {
  const [page, setPage] = useState(0)
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
      const target = document.querySelector(`#${elementId} > h1`)
      observer.observe(target)
    })
  }, [])

  return (
    <div className="grid">
      <div className="grid-navbar">
        <NavBar
          onClickPage={(newPage) => setPage(newPage)}
          activeIndex={activeIndex}
        />
      </div>
      <div className="grid-content">
        <Content page={page} />
      </div>
    </div>
  )
}

export default Pages
