import { all } from 'redux-saga/effects';

import { watchEveryCheckGameWinner } from './gameSagas';

export default function* rootSaga() {
  yield all([watchEveryCheckGameWinner()]);
}
