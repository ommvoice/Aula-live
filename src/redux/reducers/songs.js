import { RECEIVE_SONGS, SEARCH_TEXT, ON_ERROR } from '../actions/songs';

const initialState = {
  searchText: '',
  songs: [],
  error: null,
};

function receiveSongs(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        songs: action.payload && action.payload.data.feed.results
      };
    case SEARCH_TEXT:
      return {
        ...state,
        searchText: action.search
      };
    case ON_ERROR:
      return {
        ...state,
        error: true 
      };
    default:
      return state;
  }
}

export default receiveSongs;
