import { StrictMode } from 'react'// development tool provided by React helps to find the problems in your code(checking tool) 
import { createRoot } from 'react-dom/client'//used to connect React to the HTML DOM
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
