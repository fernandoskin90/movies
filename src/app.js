import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { Header } from '@components/header';
import { Routes } from '@src/routes';

import { SearchProvider } from '@src/context';

import './styles.scss';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="movies-app">
      <SearchProvider value={{ searchText, setSearchText }}>
        <Router>
          <Header />
          <main className="movies-content">
            <Routes />
          </main>
        </Router>
      </SearchProvider>
    </div>
  );
};
