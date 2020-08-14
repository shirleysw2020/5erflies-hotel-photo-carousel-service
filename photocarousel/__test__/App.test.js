import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from "react-test-renderer";
import renderer from 'react-test-renderer';
import App from '../App.jsx';


describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });

    it('should have the Gallery component', () => {
       const wrapper = shallow(<App />)
       expect(wrapper.find('Gallery')).toBeDefined();
    });

    it("Matches the snapshot and return null since App doesn't take in props", () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
     });
});





// it('the show property should be true with a click of button', () => {
//    const wrapper = mount(<App />);
//    wrapper.find('input[type="password"]').simulate('click', {
//      target: {
//        value: 'validpassword',
//      },
//    });
//    expect(wrapper.find('input[type="button"]').prop('disabled')).toBeFalsy();
//  });

// describe('debugging', () => {
//    it ('debugging App', () => {
//    const shallowWrapper = shallow(<App />);
//    const mountWrapper = mount(<App />);

//    console.log('shallow app', shallowWrapper.debug());
//    console.log('mount app', mountWrapper.debug());
//    })
// })

// describe('just test', () => {
//    it ('calls useEffect at elast once', () => {
//       spy(App.prototype, 'useEffect')
//       const wrapper = mount(<App />);
//       expect(App.prototype.useEffect.calledOnce.toEqual(true));
//    });
// });
// describe('should call openModal method and set state of show', () => {
//    it ('set state of show to be true', () => {
//       const wrapper = mount(<App />);
//       expect(wrapper.prop('show').toBe(true));
//       const openModalInstance = wrapper.instance();
//       openModalInstance.openModal();
//    })
// });

// describe('should call openModal method and set state of show', () => {
//    it ('set state of show to be true', () => {
//       const wrapper = shallow(<App />);
//       expect(wrapper.state('show').toBe(true));
//       const openModalInstance = wrapper.instance();
//       openModalInstance.openModal();
//    })
// });

// const wrapper = shallow(<App />);
// expect(wrapper.find({ prop: 'listing' })).to.have.lengthOf(3);

// describe('<App />', () => {
//    const addCount = () => setphotoCount(photoCount++);
//    it('renders one <Header /> component', () => {
//      const wrapper = shallow(<App/>);
//      expect(wrapper.children()).to.have.lengthOf(3);
//    });
//  });

// A shallow wrapper isn't the component, it's what the component renders. the wrapper you get is around the div it renders - which has no instance

//mount renders a component to its extreme leaf nodes whereas shallow as the name suggests does a shallow render i.e. renders just the component and not its children.