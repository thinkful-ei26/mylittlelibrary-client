import React from 'react';
import { shallow } from 'enzyme';
import MainView from './main-view';

describe('<MainView/>', () => {
  it('Renders without crashing', () => {
    shallow(<MainView />);
  });
  it('Renders the search bar', () => {
    const wrapper = shallow(<MainView />);
    expect(wrapper.find('.searchbar').length).toEqual(1)
  });
  
});


// expect(wrapper.findsome('.searchbar')).toEqual(true)
//     expect(wrapper.hasClass('searchbar')).toEqual(true);
// expect(wrapper.some('.class')).toEqual(true)(
//     expect(wrapper.find('.class').length).toEqual(1)