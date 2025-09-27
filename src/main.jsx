import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // strictmode runs the program twice so the unused part does not run .
  <StrictMode>
    <App />
  </StrictMode>,
)
