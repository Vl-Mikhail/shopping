import React from 'react';
import { shallow } from 'enzyme';
import Popup from './Popup';


it('renders without crashing', () => {
  expect(shallow(<Popup/>)).toMatchSnapshot();
});