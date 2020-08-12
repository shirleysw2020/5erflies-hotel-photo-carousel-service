import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../Gallery.jsx';


describe('Gallery', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Gallery/>);

    expect(component).toMatchSnapshot();
  });
});