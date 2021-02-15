import { createContext } from 'react'

const WonderlandContext = createContext({
  initialRender: true,
  showPages: false,
})

export default WonderlandContext
