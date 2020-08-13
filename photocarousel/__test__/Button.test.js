import React from "react";
import { create } from "react-test-renderer";
import { shallow } from 'enzyme';
import Button from '../Button.jsx';

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});


// const openModal = jest.fn();
// describe('Button component', () => {
//   it('button click should invoke function openModal', () => {
//     const component = shallow(<Button onClick={openModal} />);
//     component
//       .find('sc-bwzfXH kVobZv')
//       .simulate('click');
//     expect(openModal).toHaveBeenCalled();
//   });
// });

