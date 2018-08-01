import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Routes.css'

const Routes = () => (
  <Router>
    <span className='Routes-link'>
      <Link to='/'>Home</Link>
    </span>
  </Router>
)

export default Routes
