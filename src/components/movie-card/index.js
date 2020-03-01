import React from 'react';
import { getPoster } from '@src/config/movies-api';
import './styles.scss';

export const MovieCard = ({ poster, title, voteAverage, voteCount }) => (
  <div className="movie-card">
    <div className="movie-card__poster">
      <img src={getPoster(poster)} alt="movie" />
    </div>
    <div className="movie-card__title">{title}</div>
    <div className="movie-card__vote-count">{voteCount}</div>
    <div className="movie-card__vote-average">{voteAverage}</div>
  </div>
);
