import {all} from 'redux-saga/effects';
import gitHubUsers from './githubUsers/sagas';

export default function* rootSaga() {
  return yield all([
    gitHubUsers
  ]);
}