import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App.jsx';
import Header from '../Header.jsx';



describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});

