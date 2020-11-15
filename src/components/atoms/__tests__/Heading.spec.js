import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../Heading';

describe('Heading', () => {
  it('renders correctly', () => {
    const headingText = 'test';
    const wrapper = shallow(<Heading text={headingText} />);
    const text = wrapper.find('h4').text();

    expect(text).toEqual(headingText);
  });
});
