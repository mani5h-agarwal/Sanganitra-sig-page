import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Sig, events } from './data.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App Sig={Sig} events={events}/>
  </StrictMode>,
)
