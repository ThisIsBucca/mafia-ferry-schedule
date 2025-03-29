import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'  // Change this line to use named import
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 