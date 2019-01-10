import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './login-form';

describe('<LoginForm/>', () => {
  it('Renders without crashing', () => {
    shallow(<LoginForm />);
  });
  it('Renders the log-in form', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.some('.login-form')).toEqual(true)
  });
});