import { expect } from 'chai';
import React from 'react'
import { shallow, mount } from 'enzyme'
import BandInput from '../src/components/BandInput'
import sinon from 'sinon'
import { renderer } from '../src/index'
import createStore from '../src/createStore'
import manageBand from '../src/reducers/manageBand'
import App from '../src/App'
import Bands from '../src/components/Bands'
import Band from '../src/components/Band'

describe('Bands Component', () => {
  it('displays a list of band components', () => {
    const store = createStore(manageBand)
    sinon.stub(store, 'getState').returns({bands: [{id: 1, text: 'hello'},
      {id: 2, text: 'goodbye'}, {id: 3, text: 'ciao'}
      ]});
    const wrapper = shallow(<Bands store={store}/>)
    expect(wrapper.find(Band)).to.have.length(3);
  });
});

describe('Band Component', () => {
  it('displays the appropriate text', () => {
    const wrapper = shallow(<Band text='hello'/>)
    expect(wrapper.text()).to.contain('hello');
  });

  it('renders an li', () => {
    const wrapper = shallow(<Band text='hello'/>)
    expect(wrapper.find('li')).to.have.length(1)
  });
});

describe('redux', () => {
  it('has an id property that increments with each element that is created', () => {
    const store = createStore(manageBand)
    const wrapper = shallow(<BandInput store={store}/>)
    sinon.stub(renderer, "render");
    let form = wrapper.find('form')
    let input = wrapper.find('input').first()
    input.simulate('change', { target: { value: 'Hello' } })
    form.simulate('submit',  { preventDefault() {} })

    expect(store.getState().bands[0].id).to.equal(1)
    expect(store.getState().bands[0].text).to.equal('Hello')
    input.simulate('change', { target: { value: 'ciao' } })
    form.simulate('submit',  { preventDefault() {} })
    expect(store.getState().bands[1].id).to.equal(2)
    expect(store.getState().bands[1].text).to.equal('ciao')
  });
})

describe('band Component with redux', () => {
  it('has the id as a property of the component', () => {
    const store = createStore(manageBand)
    sinon.stub(store, 'getState').returns({bands: [{id: 1, text: 'hello'},
      {id: 2, text: 'goodbye'}, {id: 3, text: 'ciao'}
      ]});
    const wrapper = shallow(<Bands store={store}/>)
    expect(wrapper.find({id: 1})).to.have.length(1);
  })

  it('has a button that dispatches an DELETE_BAND action when clicked', ()=> {
    const store = createStore(manageBand)
    const wrapper = shallow(<Band store={store} id={1} text={'hello'}/>)
    let deleteButton = wrapper.find('button').first()
    let stub = sinon.stub(store, "dispatch");
    deleteButton.simulate('click',  { preventDefault() {} })
    expect(stub.calledWith(sinon.match({type: 'DELETE_BAND'}))).to.equal(true)
  })

  it('has a button that dispatches an DELETE_BAND action with the proper id when clicked', ()=> {
    const store = createStore(manageBand)
    const wrapper = shallow(<Band store={store} id={1} text={'hello'}/>)
    let deleteButton = wrapper.find('button').first()
    let stub = sinon.stub(store, "dispatch");
    deleteButton.simulate('click',  { preventDefault() {} })
    expect(stub.calledWith(sinon.match({type: 'DELETE_BAND', id: 1}))).to.equal(true)
  })

  it('updates the state of the store to remove the component', () => {
    const store = createStore(manageBand)
    const wrapper = mount(<BandInput store={store}/>)

    let form = wrapper.find('form')
    let input = wrapper.find('input').first()
    input.simulate('change', { target: { value: 'Hello' } })
    form.simulate('submit',  { preventDefault() {} })
    input.simulate('change', { target: { value: 'ciao' } })
    form.simulate('submit',  { preventDefault() {} })
    let secondBand = store.getState().bands[1]
    const BandComponent = shallow(<Band store={store} id={secondBand.id} text={secondBand.text}/>)
    let deleteButton = BandComponent.find('button').first()
    deleteButton.simulate('click')
    expect(store.getState().bands.length).to.equal(1)
    expect(store.getState().bands[0].text).to.equal('Hello')
  });
})
