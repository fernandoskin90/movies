import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { API_KEY, URL_API } from '../Utils/constants';

//@ Components
import { SliderMovies } from '../components/SliderMovies';

export const Home = () => {
  const url = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
  const newPlaying = useFetch(url);
  return (
    <>
      <SliderMovies movies={newPlaying} />
    </>
  );
};
