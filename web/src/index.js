import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'noty/lib/noty.css'
import 'noty/lib/themes/mint.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
