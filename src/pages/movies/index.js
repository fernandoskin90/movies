import React from 'react';
import { useMovies } from '@src/hooks/useMovies';
import { MovieCard } from '@components/movie-card';

export const Movies = () => {
  const { movies } = useMovies();
  console.log({ movies });
  return (
    <div className="home">
      <MovieCard
        poster="/uPGq1mkEXznUpapDmOSxbsybjfp.jpg"
        title="A Rainy day in New York"
        voteAverage={6.8}
        voteCount={568}
      />
    </div>
  );
};
