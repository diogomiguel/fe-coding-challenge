import { all } from 'redux-saga/effects';

import { watchEveryCheckGameWinner } from './game';

export default function* rootSaga() {
  yield all([watchEveryCheckGameWinner()]);
}
