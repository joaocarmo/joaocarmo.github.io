// Imports
import React, { useState } from 'react'
import NavBar from './NavBar'
import Content from './Content'
import '../../scss/pages.scss'

const Pages = () => {
  const [page, setPage] = useState('about')

  return (
    <div className='grid'>
      <div><NavBar onClickPage={(newPage) => setPage(newPage)} /></div>
      <div><Content page={page} /></div>
    </div>
  )
}

export default Pages
