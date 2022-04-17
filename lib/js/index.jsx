import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Wonderland from './components/Wonderland'
import setup from './setup'
import '@scss/index.scss'

const container = document.getElementById('main')

if (container) {
  setup()

  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Wonderland />
    </StrictMode>,
  )
}
