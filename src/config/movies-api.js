export const MOVIES_TOKEN = '7759842a179358d8a820611d87e2802e';

export const API_URL = 'https://api.themoviedb.org/3/movie';

export const getPoster = (path, size = 500) =>
  `https://image.tmdb.org/t/p/w${size}${path}`;
