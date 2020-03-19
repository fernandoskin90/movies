import React from 'react';
import { Carousel, Button } from 'antd';
import { Link } from 'react-router-dom';
import './slider.scss';

export const SliderMovies = ({ movies }) => {
  if (movies.loading || !movies.results) {
    return 'Loading....';
  }

  const { results } = movies.results;

  return (
    <Carousel autoplay className="slider-movies">
      {results && results.map(movie => <Movie key={movie.id} movie={movie} />)}
    </Carousel>
  );
};

const Movie = ({ movie: { backdrop_path, id, title, overview } }) => {
  const img_url = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url("${img_url}")` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h1>{title}</h1>
          <p>{overview}</p>
          <Link to={`/movies/${id}`}>
            <Button type="primary">Ver más</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
