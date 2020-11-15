import React from 'react';
import { shallow } from 'enzyme';
import Select from '../Select';
import { SONG_CATEGORIES } from '../../../constants';

describe('Select', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Select options={SONG_CATEGORIES} />);

    expect(wrapper).toMatchSnapshot();
  });
});
