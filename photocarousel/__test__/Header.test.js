import React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../Header.jsx';

const list = {
        "photos" : [
                "https://5erflies.s3-us-west-1.amazonaws.com/CalanteLuna/249fd66d-2b01-47e1-9c40-ca7f78887dd3.jpg",
                "https://5erflies.s3-us-west-1.amazonaws.com/CalanteLuna/004d5a66-ccf2-4b03-9bcf-93d3d735c6d5.jpg",
                "https://5erflies.s3-us-west-1.amazonaws.com/CalanteLuna/88f6875c-8e12-4265-9e78-0f5b43f37d57.jpg",
                "https://5erflies.s3-us-west-1.amazonaws.com/CalanteLuna/622f87e1_original.jpg",
                "https://5erflies.s3-us-west-1.amazonaws.com/CalanteLuna/900afa63-66d2-46e4-9101-fac8a8100938.jpg",
                "https://5erflies.s3-us-west-1.amazonaws.com/CalanteLuna/948a8be4_original.jpg"
        ],
        "ID" : 20,
        "listingTitle" : "CalanteLuna Relais - M'Illumino d'Immenso",
        "rating" : 4.01,
        "numOfReviews" : 473,
        "superHost" : false,
        "location" : "Gottliebchester Borders Italy",
        "__v" : 0
};

describe('<Header> components', () => {
  it('should have the Header component', () => {
    const wrapper = shallow(<Header list={list}/>)
    expect(wrapper.find('Logo')).toBeDefined();
  });

  it('should match snapshot created', () => {
    const tree = renderer.create(<Header list={list}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});




// it ('should have subColor', () => {
//   const wrapper = mount(<Header />);
//   expect(wrapper.find('InfoData')).toHaveStyleRule('color', theme.subColor)
// });

// describe('Label', () => {
//   it('should render label and text', () => {
//     const wrapper = shallow(<Label required>Some Text</Label>).dive();

//     expect(wrapper.text()).toBe('Some Text');
//   });
// });

// const Logo = styled.img`
//   width: ${props => props.host ? '16px' : '17px'};
//   height: ${props => props.host ? '16px' : 'none'};
//   padding-bottom: 20px;
//   padding-right: 2px;
// `;