import React, { Component } from 'react'
import Header from './components/header/Header.js'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='container-fluid'>
          <Header />
        </div>
      </div>
    )
  }
}

export default App
