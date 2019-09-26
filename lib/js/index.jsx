// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-alton'
// import injectFonts from 'typography-inject-fonts'
import Wonderland from './components/Wonderland'
import '../scss/index.scss'

const typography = new Typography(twinPeaksTheme)
typography.injectStyles()
// TODO: Fix the font injection, create a new package if needed
// console.log(typography.options.googleFonts)
// injectFonts(typography)

ReactDOM.render(
  <Wonderland />,
  document.getElementById('main'),
)
