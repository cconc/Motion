import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import App from './App';

describe('When the App is loaded', () =>{
  let wrapper = shallow(<App/>)
  it('Will exist & contain the correct amount of divs', () => {
    let divs = wrapper.find('div')
    let headerComponent = wrapper.find('Header')

    expect(wrapper).to.have.length(1)
    expect(divs).to.have.length(2)
    expect(headerComponent).to.have.length(1)
  });
})
