import { expect } from 'chai';
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import BandInput from '../src/components/BandInput';
import sinon from 'sinon';
import { renderer } from '../src/index';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import manageBand from '../src/reducers/manageBand';
import Band from '../src/components/Band'
import App from '../src/App';
import BandsContainer from '../src/components/BandsContainer';

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('Bands Component', () => {

});

describe('Band Component', () => {


});

describe('Redux', () => {


});

describe('Band Component with Redux', () => {


});
