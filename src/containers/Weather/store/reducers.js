import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  SEARCH_WEATHER_FAILED,
} from './actions';

type State = {
  items: Array,
};

type Action = {
  type: string,
  query?: string,
  message?: string,
  response?: WeatherRow,
};

export default (state: State = {
  items: [],
}, action: Action): * => {
  switch(action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        query: action.query,
      };
    case RECEIVE_WEATHER:
      return {
        ...state,
        items: [...state.items, action.response],
      };
    case SEARCH_WEATHER_FAILED:
      return {
        ...state,
        error: action.message,
      };
    default:
      return state;
  }
};
