/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import { shallow } from 'enzyme';
import React from 'react';
import Pagination from '../components/Pagination';

const props = {
  decrementPage: jest.fn(),
  incrementPage: jest.fn(),
  paginate: jest.fn(),
};

const wrapper = shallow((<Pagination {...props} />));
const incrementBtn = wrapper.find('#increment');
const decrementBtn = wrapper.find('#decrement');

describe('Behavior of buttons...', () => {
  test('Should call all onClicks', () => {
    expect(props.incrementPage).not.toHaveBeenCalled();
    incrementBtn.simulate('click');
    expect(props.incrementPage).toHaveBeenCalled();
    decrementBtn.simulate('click');
    expect(props.decrementPage).toHaveBeenCalled();
  });
});