import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../redux/actions/songs';
import { songs } from '../services/api/songs';

export function* callSongsApi(param) {
  try {
    const result = yield call(songs, param && param.category || 'top-albums');
    yield put(actions.receiveSongs(result));
  } catch(error) {
    yield put(actions.onError(error));
  }
}

export function* receiveSongs() {
  yield takeLatest(actions.GET_SONGS, callSongsApi);
}
