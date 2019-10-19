/* global VERSION, BUILDTIME, ENVIRONMENT */
/* eslint no-console: 0 */

const scrollToElement = (event, elementId) => {
  if (event) {
    event.preventDefault()
  }
  const node = document.getElementById(elementId)
  node.scrollIntoView({ behavior: 'smooth' })
}

const getAppVersion = () => {
  let version = '1.0'
  try {
    version = VERSION
  } catch (error) {
    console.log(error.message)
  }
  return version
}

const getBuildTime = () => {
  let build = JSON.stringify(new Date().toISOString().substring(0, 10))
  try {
    build = BUILDTIME
  } catch (error) {
    console.log(error.message)
  }
  return build
}

const getEnv = () => {
  let env = 'development'
  try {
    env = ENVIRONMENT
  } catch (error) {
    console.log(error.message)
  }
  return env
}

const styledConsole = (...args) => {
  const defaultStyle = `
color: lightblue;
background-color: black;
border: solid 1px lightblue;
padding: 8px;
border-radius: 4px;
font-size: 16px;
font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
margin: 4px;
`
  args.forEach((arg) => {
    console.log('%c%s', defaultStyle, typeof arg === 'string' ? arg.trim() : arg)
  })
}

const injectFonts = (typographyObj) => {
  const basePath = 'https://fonts.googleapis.com/css?family='
  /*
    Adapted from https://github.com/dradetsky/typography-inject-fonts
  */
  const injectLink = (link) => {
    const typoElt = document.getElementById('typography.js')
    if (typoElt) {
      typoElt.insertAdjacentHTML('afterend', link)
    } else {
      throw new Error('No typography element found')
    }
  }

  const getFontsStr = (typography) => {
    let fontsStr = ''
    if (typography.options.googleFonts) {
      const fonts = typography.options.googleFonts.map((font) => {
        let str = ''
        str += font.name.split(' ').join('+')
        str += ':'
        str += font.styles.join(',')
        return str
      })
      fontsStr = fonts.join('|')
    }
    return fontsStr
  }

  const getFontsLink = (str) => {
    const link = `<link href="${basePath}${str}" rel="stylesheet" type="text/css" />`
    return link
  }

  const fontsStr = getFontsStr(typographyObj)
  if (fontsStr) {
    const link = getFontsLink(fontsStr)
    injectLink(link)
  } else {
    // dunno if this is ideal behavior
    throw new Error('no fonts str')
  }
}

export {
  scrollToElement, getAppVersion, getBuildTime, getEnv, styledConsole,
  injectFonts,
}
