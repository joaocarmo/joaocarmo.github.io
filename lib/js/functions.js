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

export { scrollToElement, getAppVersion, getBuildTime }
