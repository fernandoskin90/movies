import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const Home = () => {
  const url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=7759842a179358d8a820611d87e2802e&language=en-US&page=1';
  const movies = useFetch(url);
  console.log({ movies });
  return <div>Home</div>;
};
