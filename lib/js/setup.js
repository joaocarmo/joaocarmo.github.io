import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-alton'
import { injectFonts } from './functions'

const setup = () => {
  const typography = new Typography(twinPeaksTheme)
  typography.injectStyles()
  injectFonts(typography)
}

export default setup
