import { call, put, takeEvery, select } from 'redux-saga/effects';

import API from '../services';
import { WizardActions, WizardActionTypes } from '../redux/Wizard';

function* saveData(action) {
  const data = yield select(state => state.wizard);
  const response = yield call(API.saveData, data);

  if (response.ok) {
    yield put(WizardActions.saveDataSuccess(response.data));
  } else {
    const { status, problem, data: { message } } = response;
    yield put(WizardActions.saveDataFailure({ status, problem, message }));
  }
}

function* watcher() {
  yield takeEvery(WizardActionTypes.SAVE_DATA, saveData);
}

export default {
  watcher,
};
