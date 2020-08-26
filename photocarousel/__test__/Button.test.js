import React from "react";
import { create } from "react-test-renderer";
import { shallow, mount } from 'enzyme';
import Button from '../Button.jsx';

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });

  // it ('debugging Button', () => {
  // const shallowWrapper = shallow(<Button />);
  // const mountWrapper = mount(<Button />);
  // console.log('shallow Button', shallowWrapper.debug());
  // console.log('mount Button', mountWrapper.debug());
  // })
});



// const openModal = jest.fn();
// describe('Button component', () => {
//   it('button click should invoke function openModal', () => {
//     const component = shallow(<Button onClick={openModal}/>);
//     component
//       // .find expects a node
//       .find('sc-bwzfXH kVobZv')
//       .simulate('click');
//     expect(openModal).toHaveBeenCalled();
//   });
// });

