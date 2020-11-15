import React from 'react';
import { shallow } from 'enzyme';
import Songs from '../Songs';
import { SONGS } from '../../../mocks/fixtures/songs';

describe('Songs', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Songs songs={SONGS.data.feed.results} />);

    expect(wrapper).toMatchSnapshot();
  });
});
