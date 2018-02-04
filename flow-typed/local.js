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
  id: number,
  name: string,
  login: string,
  stars: number,
  createdAt: string,
};
