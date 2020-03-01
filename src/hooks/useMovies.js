import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '@src/context';
import { getMovies } from '@src/Utils/http';

export const useMovies = () => {
  const { searchText } = useContext(SearchContext);
  const [originalList, setOriginalList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  // const [moviesInfo, setMoviesInfo] = useState({});
  const success = ({ results, ...rest }) => {
    setOriginalList(results);
    setFilteredList(results);
    // setMoviesInfo(rest);
  };
  const error = error => {
    console.log({ error });
  };

  useEffect(() => {
    getMovies(success, error);
  }, []);
  return {
    movies: filteredList
  };
};
