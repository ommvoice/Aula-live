import { fork, all } from 'redux-saga/effects';
import { receiveSongs } from './songs';

export default function* root() {
  yield all([
    fork(receiveSongs),
  ]);
}
