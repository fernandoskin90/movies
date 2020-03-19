import React from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//@ Pages
import { Home } from './pages/home';
import { Movie } from './pages/movie';
import { Popular } from './pages/popular';
import { SearchMovie } from './pages/search-movie';
import { NewMovies } from './pages/new-movie';
import { Error404 } from './pages/error404';

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <Router basename="/">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/new-movies" exact={true} component={NewMovies} />
            <Route path="/popular" exact={true} component={Popular} />
            <Route path="/search" exact={true} component={SearchMovie} />
            <Route path="/movie/:id" exact={true} component={Movie} />
            <Route path="*" exact={true} component={Error404} />
          </Switch>
        </Router>
      </Content>
    </Layout>
  );
}

export default App;
