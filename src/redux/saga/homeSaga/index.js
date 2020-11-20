import {
  call,
  put,
  takeLatest,
  select,
  delay,
  takeEvery,
} from 'redux-saga/effects';

function* getHomeSaga({payload}) {
  try {
    // const apiRespone = yield call(getCourses);
    console.log("getHomeSaga payload======", payload)
  } catch (error) {
    console.log('getHomeSaga error======', error);
  }
}

export default function* rootSaga() {
  yield takeEvery('HOME_ACTION', getHomeSaga);
}
