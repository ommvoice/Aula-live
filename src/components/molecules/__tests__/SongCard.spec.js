import React from 'react';
import { shallow } from 'enzyme';
import SongCard from '../SongCard';
import { SONG_CATEGORIES } from '../../../constants';

describe('SongCard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SongCard text="test" />);

    expect(wrapper).toMatchSnapshot();
  });
});
