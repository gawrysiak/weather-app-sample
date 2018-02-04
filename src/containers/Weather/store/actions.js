export const REQUEST_WEATHER = 'app/WEATHER/REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'app/WEATHER/RECEIVE_WEATHER';
export const SEARCH_WEATHER_FAILED = 'app/WEATHER/SEARCH_WEATHER_FAILED';
export const REFRESH_WEATHER = 'app/WEATHER/REFRESH_WEATHER';
export const DELETE_WEATHER = 'app/WEATHER/DELETE_WEATHER';

export const searchWeather = (query: string): ActionType<{ query: string }> =>
  ({ type: REQUEST_WEATHER, query });

export const receiveWeather = (response: WeatherRow, lastSearch: string):
  ActionType<{ response: WeatherRow }> =>
    ({ type: RECEIVE_WEATHER, response, lastSearch });

export const searchWeatherFailed = (message: string): ActionType<{ message: string }> =>
  ({ type: SEARCH_WEATHER_FAILED, message });

export const refreshWeather = (id: number): ActionType<{ id: number }> =>
  ({ type: REFRESH_WEATHER, id });

export const deleteWeather = (id: number): ActionType<{ id: number }> =>
  ({ type: DELETE_WEATHER, id });
