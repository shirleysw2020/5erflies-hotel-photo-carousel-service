// import React from 'react';
// import { shallow } from 'enzyme';
// import Gallery from '../Gallery.jsx';

// //describe is
// describe('Gallery', () => {
//   it('should render correctly with no props', () => {
//     const component = shallow(<Gallery/>);

//     expect(component).toMatchSnapshot();
//   });
// });
// wrapper.instance.function

import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '../Gallery.jsx';

it('renders correctly when there is one item', () => {
  const list = {
    photos: ["https://5erflies.s3-us-west-1.amazonaws.com/1f57bf4f-0b96-4b38-81ad-afc9f739a7a8.jpg",
    "https://5erflies.s3-us-west-1.amazonaws.com/7fb02bb9-0965-4ffc-a59d-8d7e64f4d9f8.jpg",
    "https://5erflies.s3-us-west-1.amazonaws.com/8e0e456c-10c0-4faa-8297-19f9453937f4.jpg",
    "https://5erflies.s3-us-west-1.amazonaws.com/345b5185-33e6-402b-90d5-93c5d8b7d0e9.jpg",
    "https://5erflies.s3-us-west-1.amazonaws.com/9383d706-87a3-4da1-942e-690b6c438d5c.jpg"]
  }
  const tree = renderer.create(<Gallery list={list} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// //     it('should not render any <button> when operator is not passed in props', () => {
//   expect(wrapper.find('button')).toHaveLength(0);
// });

/*shallow() tests component we provide, and ignores any child components present in the component tree thereafter; if we had a <Header /> and <Footer /> component within <App /> for example, they would be ignored in this test.

In Enzyme we can do such a test with mount(); a full rendering test that takes the entire component tree and lifecycle methods into consideration.
{list: [photo1, photo2, photo3]}
*/