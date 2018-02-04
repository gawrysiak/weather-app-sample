const dataTransformation = {};

dataTransformation.transformResponse = (response: ApiResponse): WeatherRow =>
  ({
    temperature: response.main.temp,
    pressure: response.main.pressure,
    humidity: response.main.humidity,
    tempMin: response.main.temp_min,
    tempMax: response.main.temp_max,
    name: response.name,
    icon: response.weather[0] && response.weather[0].main,
  });

export default dataTransformation;
