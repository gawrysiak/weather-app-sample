import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { throttle } from 'lodash';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistedState = localStorage.getItem('cache') ? JSON.parse(localStorage.getItem('cache')) : undefined;

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

store.subscribe(throttle(() => {
  localStorage.setItem('cache', JSON.stringify(store.getState()));
}, 1000));

sagaMiddleware.run(rootSaga);

export default store;
