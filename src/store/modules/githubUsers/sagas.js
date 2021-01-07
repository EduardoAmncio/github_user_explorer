import {all, takeLatest} from 'redux-saga/effects';

function checkIfUserExist() {
  console.log("passa pelo middleware");
}

export default all([
  takeLatest('ADD_GITHUB_USER_INFORS', checkIfUserExist)
])