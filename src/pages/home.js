import React from 'react';
import { Row, Col } from 'antd';
import { useFetch } from '../hooks/useFetch';
import { API_KEY, URL_API } from '../Utils/constants';

//@ Components
import { SliderMovies } from '../components/SliderMovies';
import { ListMovies } from '../components/list-movie';

export const Home = () => {
  const urlNowPlaying = `${URL_API}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;
  const urlPopular = `${URL_API}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;

  const newPlaying = useFetch(urlNowPlaying);
  const popularMovies = useFetch(urlPopular);

  return (
    <>
      <SliderMovies movies={newPlaying} />
      <Row>
        <Col span="12">
          <ListMovies movies={popularMovies} title="Películas Populares" />
        </Col>
        <Col span="12">..</Col>
      </Row>
    </>
  );
};
