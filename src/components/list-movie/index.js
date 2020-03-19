import React from 'react';
import { List, Avatar, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';
import './styles.scss';

export const ListMovies = ({ movies, title }) => {
  if (movies.loading || !movies.results) {
    return <Loading />;
  }
  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={movies.results.results}
      renderItem={movie => <RenderMovvie movie={movie} />}
    />
  );
};

export const RenderMovvie = ({ movie: { id, title, poster_path } }) => {
  const url_poster = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <List.Item className="movie-list__movie">
      <List.Item.Meta
        avatar={<Avatar src={url_poster} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />
      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />} />
      </Link>
    </List.Item>
  );
};
