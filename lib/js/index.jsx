// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-twin-peaks'
import injectFonts from 'typography-inject-fonts'
import Wonderland from './components/Wonderland.jsx'
import '../scss/index.scss'

const typography = new Typography(twinPeaksTheme)
typography.injectStyles()
injectFonts(typography)

ReactDOM.render(
  <Wonderland />,
  document.getElementById('main'),
)
