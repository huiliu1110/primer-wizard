import { fork } from 'redux-saga/effects';

import WizardSaga from './WizardSaga';

export default function* rootSaga() {
  yield [fork(WizardSaga.watcher)];
}
