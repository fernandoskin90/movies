import React from 'react';
import { Layout } from 'antd';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//@Components
import { MenuTop } from './components/Menu';

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
      <Router basename="/">
        <Header>
          <MenuTop />
        </Header>
        <Content>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/new-movies" exact={true} component={NewMovies} />
            <Route path="/popular" exact={true} component={Popular} />
            <Route path="/search" exact={true} component={SearchMovie} />
            <Route path="/movie/:id" exact={true} component={Movie} />
            <Route path="*" exact={true} component={Error404} />
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
