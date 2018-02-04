import Axios from 'axios';

const client = Axios.create();

client.searchWeather = ({ query }: { query: string }): Promise<ApiResponse> =>
  client.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then(({ data }: { data: ApiResponse }): ApiResponse => data);

export default client;
