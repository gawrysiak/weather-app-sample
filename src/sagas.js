import { fork } from 'redux-saga/effects';
import weatherSaga from 'containers/Weather/store/sagas';

function* rootSaga(): Saga<void> {
  yield [
    fork(weatherSaga),
  ];
}

export default rootSaga;
