const scrollToElement = (event, elementId) => {
  if (event) {
    event.preventDefault()
  }
  const node = document.getElementById(elementId)
  node.scrollIntoView({ behavior: 'smooth' })
}

const getAppVersion = () => {
  let version = 'development'
  try {
    /* eslint-disable-next-line no-undef */
    version = VERSION
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error.message)
  }
  return version
}

const getBuildTime = () => {
  let build = JSON.stringify(new Date().toISOString().substring(0, 10))
  try {
    /* eslint-disable-next-line no-undef */
    build = BUILDTIME
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error.message)
  }
  return build
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
  scrollToElement, getAppVersion, getBuildTime, injectFonts,
}
