import React from 'react'
import Logo from '../../logo-app.PNG'
import Routes from '../../Routes'
import './Header.css'

const Header = () => {
  return (
    <div className='Header-header'>
      <div className='Header-container'>
        <img src={Logo} className='Header-logo' alt='logo' />
      </div>
      <div className='Header-routes'>
        <Routes />
        <span className='Header-welcome'>
              Welcome | Ciaran
        </span>
      </div>
    </div>
  )
}

export default Header
