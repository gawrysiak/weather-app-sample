declare type Action = {
  type: string,
};

declare type ActionType<Params> = {
  type: string,
} & Params;

declare type ApiResponse = {
  [key: string]: any,
}

declare type WeatherRow = {
  temperature: number,
  pressure: number,
  humidity: number,
  tempMin: number,
  tempMax: number,
  name: string,
  icon: string,
};
