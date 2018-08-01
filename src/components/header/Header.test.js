import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import {shallow, mount, render} from 'enzyme'
import {expect} from 'chai'

describe('When the Header component is loaded', () => {
  const wrapper = mount(<Header />)

  it('Will exist & contain the correct amount of divs', () => {
    let divs = wrapper.find('div')
    expect(wrapper).to.have.length(1)
    expect(divs).to.have.length(3)
  })
  it('Will contain a logo', () => {
    let logo = wrapper.find('img')
    expect(logo).to.have.length(1)
  })
})
