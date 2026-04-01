import './trusted-security-policies.js'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Wonderland from './components/Wonderland'
import '@scss/index.scss'

const container = document.getElementById('main')

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Wonderland />
    </StrictMode>,
  )
}
