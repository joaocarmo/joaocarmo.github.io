const scrollToElement = (event, elementId) => {
  event.preventDefault()
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

export { scrollToElement, getAppVersion }
