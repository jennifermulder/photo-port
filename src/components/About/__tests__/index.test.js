import React from 'react';
//(render) Jest creates a simulated DOM in a Node.js env to aprox the DOM. (cleanup) remove components from the DOM
import { render, cleanup } from '@testing-library/react';
//import extend-expect library from the jest-dom package. jest-dom: access to custom matchers
import '@testing-library/jest-dom/extend-expect';
//component being tested "About"
import About from '..';

//after each test, no leftover memory data for false results
afterEach(cleanup);

//declare component being tested
describe('About component', () => {
  // First Test (component is rendering).'what is being tested' 2nd argument - callback f(n) runs test
  it('renders', () => {
    render(<About />);
  });
  //index.test.js.snap is a serialized version of component's node structure, to be compared against new snapshots 
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
})