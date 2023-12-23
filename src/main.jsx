import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../styles/normalize.css'
import '../styles/index.css'
import '../styles/personal.css'
import '../styles/work.css'
import '../styles/resume.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
