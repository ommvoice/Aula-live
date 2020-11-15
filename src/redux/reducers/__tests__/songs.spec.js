import reducer from '../songs';
import * as actions from '../../actions/songs';
import { SONGS } from '../../../mocks/fixtures/songs';
 
const initialState = {
	searchText: '',
	songs: [],
	error: null
};

describe('Reducers', () => { 
	describe('Songs', () => { 
		it('returns the initial state', () => {
			expect(reducer(undefined, {})).toEqual(initialState);
		});

		it('handles RECEIVE_SONGS', () => {
			expect(reducer(initialState, actions.receiveSongs(SONGS))).toEqual({ songs: SONGS.data.feed.results, error: null, searchText: '' });
		});

		it('handles ON_ERROR', () => {
			expect(reducer(undefined, actions.onError())).toEqual({...initialState, error: true, searchText: ''});
		});
	});
});
