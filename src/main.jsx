import React from 'react'
import ReactDOM from 'react-dom/client'
import { About } from './About'
import { Header } from './Header/index'
import { Myworks } from './Myworks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <About />
    <Myworks />
  </React.StrictMode>
)
