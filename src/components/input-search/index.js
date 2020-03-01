import React, { useContext } from 'react';

import { SearchContext } from '@src/context';

import './index.scss';

export const InputSearch = () => {
  const { searchText, setSearchText } = useContext(SearchContext);

  const handleTextChange = event => {
    setSearchText(event.target.value);
  };
  return (
    <input
      className="input-search"
      type="text"
      onChange={handleTextChange}
      value={searchText}
      placeholder="Search movie"
    />
  );
};
