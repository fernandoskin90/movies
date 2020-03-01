import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import { Movies } from '@pages/movies';
import { MovieDetail } from '@pages/movie-detail';

const routes = [
  {
    component: Movies,
    exact: true,
    path: '/'
  },
  {
    component: MovieDetail,
    exact: true,
    path: '/detail/:id'
  }
];

export const Routes = () => (
  <Switch>
    {routes.map((props, index) => (
      <Route key={`route-${index}`} {...props} />
    ))}
    <Route path="*" render={() => <Redirect to="/" />} />
  </Switch>
);
