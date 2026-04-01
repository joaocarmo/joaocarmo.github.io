/* eslint no-console: 0 */

const scrollToElement = (event, elementId) => {
  if (event) {
    event.preventDefault()
  }

  const node = document.getElementById(elementId)

  node.scrollIntoView({ behavior: 'smooth' })
}

const getAppVersion = () => VERSION

const getBuildTime = () => BUILDTIME

const getEnv = () => ENVIRONMENT

const debugPrint = (...args) => {
  if (getEnv() === 'development') {
    console.log(...args)
  }
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
    console.log(
      '%c%s',
      defaultStyle,
      typeof arg === 'string' ? arg.trim() : arg,
    )
  })
}

export {
  scrollToElement,
  getAppVersion,
  getBuildTime,
  getEnv,
  debugPrint,
  styledConsole,
}
