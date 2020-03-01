import React from 'react';
import { Link } from 'react-router-dom';

import { InputSearch } from '@components/input-search';

import './styles.scss';

export const Header = () => (
  <header className="movies-header">
    <Link className="movies-header__logo" to="/">
      Movies
    </Link>
    <InputSearch />
  </header>
);
