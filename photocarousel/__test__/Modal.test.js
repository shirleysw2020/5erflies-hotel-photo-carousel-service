import React from 'react';
import { expect as chaiExpect } from 'chai';
import { create } from "react-test-renderer";
import { shallow } from 'enzyme';
import Modal from '../Modal.jsx';

const mockListing = {
  photos: ["https://5erflies.s3-us-west-1.amazonaws.com/1f57bf4f-0b96-4b38-81ad-afc9f739a7a8.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/7fb02bb9-0965-4ffc-a59d-8d7e64f4d9f8.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/8e0e456c-10c0-4faa-8297-19f9453937f4.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/345b5185-33e6-402b-90d5-93c5d8b7d0e9.jpg",
  "https://5erflies.s3-us-west-1.amazonaws.com/9383d706-87a3-4da1-942e-690b6c438d5c.jpg"]
};

const addCount = () => setphotoCount(photoCount++);
const clickedPhotoIdx = 1;

describe('<Modal />', () => {
  const wrapper = shallow(<Modal list={mockListing}/>);
  it('shoud exist', () => {
    chaiExpect(wrapper.exists()).to.equal(true);
  });
});

describe('<Modal />', () => {
  it('Modal should have 2 children', () => {
    const wrapper = shallow(<Modal addCount={addCount} list={mockListing} clickedPhotoIdx={clickedPhotoIdx}/>);
    chaiExpect(wrapper.children()).to.have.lengthOf(2);
  });
});

describe("Modal component", () => {
  test("Matches the snapshot", () => {
    const modal = create(<Modal addCount={addCount} list={mockListing} clickedPhotoIdx={clickedPhotoIdx}/>);
    expect(modal.toJSON()).toMatchSnapshot();
  });
});