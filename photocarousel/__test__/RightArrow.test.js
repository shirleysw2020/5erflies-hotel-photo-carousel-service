import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import RightArrow from '../RightArrow.jsx';

const addCount = () => setphotoCount(photoCount++);

describe('<Header> components', () => {
  it('should match snapshot created', () => {
    const tree = renderer.create(<RightArrow addCount={addCount} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});