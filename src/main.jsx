import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header/index'
import { About } from './About'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <About />
  </React.StrictMode>
)
