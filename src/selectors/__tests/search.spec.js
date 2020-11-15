import { SONGS } from '../../mocks/fixtures/songs';
import search from '../search';
 
const state = {
  songs: {
		songs: SONGS.data.feed.results,
		searchText: 'Black'
	}
}

describe('Search', () => { 
	it('searches correctly', async () => {
		const result = search(state);
		expect(result[0].artistName).toEqual('Kodak Black');
	});
});
