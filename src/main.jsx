import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './pages/Landing.jsx'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <Landing />
  </StrictMode>
)
