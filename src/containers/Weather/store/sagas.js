import { call, put, takeLatest, all } from 'redux-saga/effects';
import Api from 'utils/api';
import Data from 'utils/data';
import { delay } from 'redux-saga';
import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  SEARCH_WEATHER_FAILED,
} from './actions';

export function* handleInput(action: { query: string }): Saga<void> {
  yield call(delay, 1000);

  try {
    const weather = yield call(Api.searchWeather, action);

    yield put({
      type: RECEIVE_WEATHER,
      response: Data.transformResponse(weather),
    });
  } catch (e) {
    yield put({ type: SEARCH_WEATHER_FAILED, message: e.message });
  }
}

function* watchAll(): Saga<void> {
  yield all([
    takeLatest(REQUEST_WEATHER, handleInput),
  ]);
}

export default watchAll;
