import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';

describe("App",function(){
  it("renders without crashing",()=>{
    let mountedApp = shallow(<App/>)
  })
  it("renders a StoreLocator",()=>{
    let mountedApp = shallow(<App/>);
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  })
})

