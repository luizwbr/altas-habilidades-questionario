import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

function renderApp() {
  const rootElement = document.getElementById('root')
  if (!rootElement) return

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp)
} else {
  renderApp()
}
