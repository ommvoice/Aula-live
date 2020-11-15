export const GET_SONGS = 'GET_SONGS';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const ON_ERROR = 'ON_ERROR';

export function getSongs(category) {
  return {
    type: GET_SONGS,
    category,
  };
}

export function getSearch(search) {
  return {
    type: SEARCH_TEXT,
    search,
  };
}

export function receiveSongs(payload) {
  return {
    type: RECEIVE_SONGS,
    payload,
  };
}

export function onError() {
  return {
    type: ON_ERROR,
  };
}
